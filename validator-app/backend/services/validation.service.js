/**
 * validation.service.js
 * Capa de servicio - Lógica de validación (versión con soporte de dialectos SQL)
 * Estructura MVC
 */

const { Parser } = require('node-sql-parser');

const DIALECTS = ['MySQL', 'PostgreSQL', 'SQLite', 'ANSI'];

const MONGO_OPERATORS = [
  '$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$in', '$nin',
  '$and', '$or', '$not', '$nor', '$exists', '$type', '$mod',
  '$regex', '$text', '$where', '$all', '$elemMatch', '$size',
  '$slice', '$set', '$unset', '$inc', '$push', '$pull', '$addToSet',
  '$pop', '$rename', '$currentDate', '$mul', '$min', '$max',
  '$sum', '$avg', '$first', '$last', '$match', '$group', '$sort',
  '$project', '$limit', '$skip', '$unwind', '$lookup', '$count',
  '$addFields', '$replaceRoot', '$out', '$merge', '$bucket',
  '$facet', '$geoNear', '$graphLookup', '$indexStats', '$listSessions',
  '$planCacheStats', '$redact', '$sample', '$sortByCount'
];

const MONGO_COMMANDS = [
  'find', 'findOne', 'insertOne', 'insertMany', 'updateOne',
  'updateMany', 'deleteOne', 'deleteMany', 'aggregate',
  'countDocuments', 'distinct', 'createIndex', 'dropCollection',
  'drop', 'createCollection', 'listCollections',
  'startSession', 'commitTransaction', 'abortTransaction', 'withTransaction',
  'enableSharding', 'shardCollection', 'listShards', 'getShardDistribution',
  'fsyncUnlock', 'replSetInitiate', 'replSetGetStatus'
];

// ============================================
//  VALIDADOR SQL
// ============================================

function validateSQL(query, dialect = 'MySQL') {
  const parser = new Parser();
  const errors = [];
  const suggestions = [];

  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return {
      valid: false,
      errors: [{ line: 1, column: 1, message: 'La consulta está vacía.' }],
      suggestions: ['Escribe una consulta SQL. Ejemplo: SELECT * FROM usuarios;']
    };
  }

  const upperQuery = trimmedQuery.toUpperCase();

  if (upperQuery.startsWith('SELECT') && !/\bFROM\b/.test(upperQuery)) {
    suggestions.push('¿Olvidaste la cláusula FROM? Ejemplo: SELECT * FROM tabla');
  }
  if (upperQuery.includes('WHERE') && !['SELECT', 'UPDATE', 'DELETE'].some(kw => upperQuery.startsWith(kw))) {
    suggestions.push('WHERE generalmente se usa con SELECT, UPDATE o DELETE.');
  }

  try {
    const validDialect = DIALECTS.includes(dialect) ? dialect : 'MySQL';
    const ast = parser.astify(trimmedQuery, { database: validDialect });
    if (suggestions.length === 0) {
      suggestions.push('✅ Tu consulta SQL tiene una estructura correcta.');
    }
    return { valid: true, dialect: validDialect, errors: [], suggestions };
  } catch (err) {
    let line = 1;
    let column = 1;
    const errMsg = err.message || '';
    
    const lineMatch = errMsg.match(/line\s*(\d+)/i);
    if (lineMatch) line = parseInt(lineMatch[1], 10);
    
    const colMatch = errMsg.match(/column\s*(\d+)/i);
    if (colMatch) column = parseInt(colMatch[1], 10);
    
    if (column === 1 && errMsg) {
      const pos = findErrorPosition(trimmedQuery, errMsg);
      if (pos.line) line = pos.line;
      if (pos.column) column = pos.column;
    }

    let message = errMsg || 'Error de sintaxis desconocido.';
    message = message.replace(/^Error:\s*/i, '');
    message = translateSQLError(message, trimmedQuery);

    errors.push({ line, column, message });
    addSQLSuggestions(upperQuery, suggestions);

    return { valid: false, dialect: dialect, errors, suggestions };
  }
}

function translateSQLError(message, query) {
  const msgLower = message.toLowerCase();
  if (msgLower.includes('expected')) return 'Error de sintaxis: se esperaba un token diferente.';
  if (msgLower.includes('unexpected')) return 'Token inesperado. Verifica la consulta.';
  if (msgLower.includes('syntaxerror') || msgLower.includes('parse error')) return 'Error de sintaxis SQL.';
  if (msgLower.includes('quote')) return 'Error de comillas.';
  if (msgLower.includes('brace') || msgLower.includes('bracket')) return 'Error de llaves/paréntesis.';
  return `Error: ${message}`;
}

function addSQLSuggestions(upperQuery, suggestions) {
  if (upperQuery.startsWith('SELECT') && !upperQuery.includes('FROM')) {
    suggestions.push('SELECT requiere FROM.');
  }
  if (upperQuery.startsWith('INSERT') && !upperQuery.includes('INTO')) {
    suggestions.push('INSERT requiere INTO.');
  }
  if (upperQuery.startsWith('UPDATE') && !upperQuery.includes('SET')) {
    suggestions.push('UPDATE requiere SET.');
  }
  if (upperQuery.startsWith('DELETE') && !upperQuery.includes('FROM')) {
    suggestions.push('DELETE requiere FROM.');
  }
  if (upperQuery.includes('FORM') && !upperQuery.includes('FROM')) {
    suggestions.push('¿FROM mal escrito?');
  }
  if (upperQuery.includes('SELET') || upperQuery.includes('SELCT')) {
    suggestions.push('¿SELECT mal escrito?');
  }
  suggestions.push('Revisa la sintaxis de tu consulta SQL.');
}

// ============================================
//  VALIDADOR NoSQL
// ============================================

function validateNoSQL(query) {
   const errors = [];
   const suggestions = [];

   const trimmed = query.trim();
   if (!trimmed) {
     return {
       valid: false,
       errors: [{ line: 1, column: 1, message: 'La consulta está vacía.' }],
       suggestions: [
         'Escribe una consulta MongoDB en formato JSON.',
         'Ejemplo: { "find": "usuarios", "filter": { "edad": { "$gt": 18 } } }'
       ]
     };
   }

   let parsed;
   try {
     parsed = JSON.parse(trimmed);
   } catch (jsonError) {
     return {
       valid: false,
       errors: validateJSONError(jsonError, trimmed),
       suggestions: ['Verifica llaves, comillas, comas.', 'Usa JSONLint para depurar.']
     };
   }

if (typeof parsed !== 'object' || Array.isArray(parsed) || parsed === null) {
     errors.push({ line: 1, column: 1, message: 'La consulta debe ser un objeto JSON {}.' });
     suggestions.push('Ejemplo: { "find": "coleccion", "filter": {} }');
     return { valid: false, errors, suggestions };
   }

   const keys = Object.keys(parsed);
   if (keys.length === 0) {
     errors.push({ line: 1, column: 1, message: 'El objeto está vacío. Agrega un comando MongoDB.' });
     suggestions.push('Comandos: find, insertOne, updateOne, deleteOne, aggregate.');
     return { valid: false, errors, suggestions };
   }

   const command = keys.find(k => MONGO_COMMANDS.includes(k));
   if (!command) {
     errors.push({
       line: 1,
       column: 1,
       message: `Comando no válido. Soportados: ${MONGO_COMMANDS.join(', ')}.`
     });
     suggestions.push(`Usa: ${MONGO_COMMANDS.slice(0, 6).join(', ')}, etc.`);
   }

  const operatorErrors = validateMongoOperators(parsed, []);
  errors.push(...operatorErrors);

  if (command) {
    const cmdResult = validateMongoCommand(command, parsed);
    errors.push(...cmdResult.errors);
    suggestions.push(...cmdResult.suggestions);
  }

  if (errors.length === 0) {
    suggestions.push('✅ Tu consulta MongoDB tiene una estructura válida.');
  }

  return { valid: errors.length === 0, errors, suggestions };
}

function validateMongoOperators(obj, path) {
  const errors = [];
  if (typeof obj !== 'object' || obj === null) return errors;

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = [...path, key].join('.');

    if (key.startsWith('$')) {
      if (!MONGO_OPERATORS.includes(key)) {
        errors.push({
          line: 1,
          column: 1,
          message: `Operador desconocido "${key}" en ${currentPath}.`
        });
      }
      if ((key === '$in' || key === '$nin' || key === '$all') && !Array.isArray(value)) {
        errors.push({ line: 1, column: 1, message: `"${key}" requiere un array.` });
      }
      if ((key === '$and' || key === '$or' || key === '$nor') && !Array.isArray(value)) {
        errors.push({ line: 1, column: 1, message: `"${key}" requiere array de condiciones.` });
      }
      if (key === '$mod' && (!Array.isArray(value) || value.length !== 2)) {
        errors.push({ line: 1, column: 1, message: `"$mod" requiere un array de 2 elementos [divisor, residuo].` });
      }
      if (key === '$text' && typeof value !== 'object') {
        errors.push({ line: 1, column: 1, message: `"$text" requiere un objeto con "$search".` });
      }
    }

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      errors.push(...validateMongoOperators(value, [...path, key]));
    }
    if (Array.isArray(value)) {
      value.forEach((item, idx) => {
        if (typeof item === 'object' && item !== null) {
          errors.push(...validateMongoOperators(item, [...path, key, idx.toString()]));
        }
      });
    }
  }

  return errors;
}

function validateMongoCommand(command, parsed) {
  const errors = [];
  const suggestions = [];

  switch (command) {
    case 'find':
    case 'findOne':
      if (typeof parsed[command] !== 'string' || !parsed[command]) {
        errors.push({ line: 1, column: 1, message: `"${command}" necesita nombre de colección.` });
        suggestions.push(`Ejemplo: { "${command}": "coleccion", "filter": {} }`);
      }
      if (parsed.filter !== undefined && (typeof parsed.filter !== 'object' || Array.isArray(parsed.filter))) {
        errors.push({ line: 1, column: 1, message: '"filter" debe ser objeto {}.' });
      }
      break;

    case 'insertOne':
      if (!parsed.document || typeof parsed.document !== 'object') {
        errors.push({ line: 1, column: 1, message: '"insertOne" requiere "document" (objeto).' });
        suggestions.push('Ejemplo: { "insertOne": "col", "document": { "nombre": "Juan" } }');
      }
      break;

    case 'insertMany':
      if (!parsed.documents || !Array.isArray(parsed.documents)) {
        errors.push({ line: 1, column: 1, message: '"insertMany" requiere "documents" (array).' });
        suggestions.push('Ejemplo: { "insertMany": "col", "documents": [{}, {}] }');
      }
      break;

    case 'updateOne':
    case 'updateMany':
      if (!parsed.filter || typeof parsed.filter !== 'object') {
        errors.push({ line: 1, column: 1, message: `"${command}" requiere "filter".` });
      }
      if (!parsed.update || typeof parsed.update !== 'object') {
        errors.push({ line: 1, column: 1, message: `"${command}" requiere "update".` });
        suggestions.push('Usa operadores: $set, $inc, etc.');
      }
      break;

    case 'deleteOne':
    case 'deleteMany':
      if (!parsed.filter || typeof parsed.filter !== 'object') {
        errors.push({ line: 1, column: 1, message: `"${command}" requiere "filter".` });
        suggestions.push(`Ejemplo: { "${command}": "col", "filter": { "_id": "123" } }`);
      }
      break;

    case 'aggregate':
      if (typeof parsed[command] !== 'string') {
        errors.push({ line: 1, column: 1, message: '"aggregate" necesita colección.' });
      }
      if (!parsed.pipeline || !Array.isArray(parsed.pipeline)) {
        errors.push({ line: 1, column: 1, message: '"aggregate" requiere "pipeline" (array).' });
        suggestions.push('Ejemplo: { "aggregate": "col", "pipeline": [{ "$match": {} }] }');
      } else {
        const pipelineErrors = validateAggregationPipeline(parsed.pipeline);
        errors.push(...pipelineErrors);
      }
      break;

    case 'startSession':
    case 'commitTransaction':
    case 'abortTransaction':
    case 'withTransaction':
    case 'enableSharding':
    case 'shardCollection':
    case 'listShards':
    case 'getShardDistribution':
      suggestions.push(`Comando de transacción/sharding: { "${command}": ... }`);
      break;

    case 'fsyncUnlock':
    case 'replSetInitiate':
    case 'replSetGetStatus':
      suggestions.push(`Comando de replicación/administración: { "${command}": ... }`);
      break;
  }

  return { errors, suggestions };
}

function validateAggregationPipeline(pipeline) {
  const errors = [];
  const validStageOperators = ['$match', '$group', '$sort', '$project', '$limit', '$skip', '$unwind', '$lookup', '$count', '$addFields', '$replaceRoot', '$out', '$merge', '$bucket', '$facet', '$geoNear', '$graphLookup', '$indexStats', '$listSessions', '$planCacheStats', '$redact', '$sample', '$sortByCount', '$first', '$last', '$sum', '$avg', '$min', '$max', '$push', '$addToSet'];

  pipeline.forEach((stage, index) => {
    if (typeof stage !== 'object' || stage === null || Array.isArray(stage)) {
      errors.push({ line: 1, column: 1, message: `Etapa ${index + 1} debe ser un objeto {}.` });
      return;
    }

    const operators = Object.keys(stage).filter(k => k.startsWith('$'));
    operators.forEach(op => {
      if (!validStageOperators.includes(op)) {
        errors.push({ line: 1, column: 1, message: `Operador de agregación desconocido "${op}" en etapa ${index + 1}.` });
      }
    });
  });

  return errors;
}

function validateJSONError(jsonError, query) {
  const errors = [];
  let line = 1;
  let column = 1;

  const posMatch = jsonError.message.match(/position\s+(\d+)/i);
  if (posMatch) {
    const pos = parseInt(posMatch[1], 10);
    const before = query.substring(0, pos);
    line = (before.match(/\n/g) || []).length + 1;
    const lineStart = before.lastIndexOf('\n');
    column = pos - lineStart;
  }

  errors.push({ line, column, message: translateJSONError(jsonError.message) });
  return errors;
}

function translateJSONError(message) {
  if (message.includes('Unexpected token')) return 'Token inesperado.';
  if (message.includes('Unexpected end')) return 'JSON incompleto.';
  if (message.includes('Expected double-quoted')) return 'Claves entre comillas dobles.';
  return message;
}

function findErrorPosition(query, errorMsg) {
  const result = { line: 1, column: 1 };
  const upperQuery = query.toUpperCase();
  
  // Buscar errores comunes directamente en la consulta
  const commonErrors = [
    { pattern: 'SELCT', message: '¿SELECT mal escrito (SELCT)?' },
    { pattern: 'SELET', message: '¿SELECT mal escrito (SELET)?' },
    { pattern: 'FORM', message: '¿FROM mal escrito (FORM)?' },
    { pattern: 'UPDAT', message: '¿UPDATE mal escrito?' },
    { pattern: 'DELE', message: '¿DELETE mal escrito?' },
    { pattern: 'INSER', message: '¿INSERT mal escrito?' }
  ];
  
  for (const err of commonErrors) {
    const idx = upperQuery.indexOf(err.pattern);
    if (idx !== -1) {
      result.column = idx + 1;
      return result;
    }
  }
  
  // Si el parser dio línea pero no columna, calcular posición del primer token inválido
  if (errorMsg) {
    const tokens = query.split(/\s+/);
    let pos = 0;
    for (let i = 0; i < tokens.length; i++) {
      const cleanToken = tokens[i].replace(/[;,('"`]/g, '');
      if (cleanToken && !isValidSQLKeyword(cleanToken.toUpperCase())) {
        result.column = pos + 1;
        return result;
      }
      pos += tokens[i].length + 1;
    }
  }
  
  return result;
}

function isValidSQLKeyword(token) {
  const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'IN', 'LIKE', 
    'JOIN', 'INNER', 'LEFT', 'RIGHT', 'ON', 'GROUP', 'BY', 'ORDER', 'ASC', 'DESC',
    'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE', 'DROP',
    'ALTER', 'INDEX', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'HAVING', 'LIMIT',
    'OFFSET', 'DISTINCT', 'AS', 'NULL', 'IS', 'BETWEEN', 'EXISTS', 'CASE', 'WHEN',
    'THEN', 'ELSE', 'END', 'JOIN', 'LEFT', 'RIGHT', 'FULL', 'OUTER', 'CROSS', 'NATURAL'];
  return keywords.includes(token.toUpperCase());
}

module.exports = {
  validateSQL,
  validateNoSQL,
  MONGO_OPERATORS,
  MONGO_COMMANDS,
  DIALECTS
};
