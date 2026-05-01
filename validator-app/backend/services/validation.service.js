/**
 * validation.service.js
 * Capa de servicio - Contiene toda la lógica pesada de validación.
 * Este es el "Modelo" en MVC: reglas de negocio, parsers, operadores.
 */

const { Parser } = require('node-sql-parser');

// ============================================
//  CONFIGURACIÓN Y CONSTANTES
// ============================================

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
  'drop', 'createCollection', 'listCollections'
];

// ============================================
//  VALIDADOR SQL
// ============================================

/**
 * Valida una consulta SQL usando node-sql-parser.
 * @param {string} query - Consulta SQL a validar
 * @returns {{ valid: boolean, errors: Array, suggestions: Array }}
 */
function validateSQL(query) {
  const parser = new Parser();
  const errors = [];
  const suggestions = [];

  const trimmedQuery = query.trim();
  const upperQuery = trimmedQuery.toUpperCase();

  // 1. Query vacía
  if (!trimmedQuery) {
    return {
      valid: false,
      errors: [{ line: 1, message: 'La consulta está vacía.' }],
      suggestions: ['Escribe una consulta SQL. Ejemplo: SELECT * FROM usuarios;']
    };
  }

  // 2. Sugerencias preliminares (cláusulas faltantes)
  if (upperQuery.startsWith('SELECT') && !/\bFROM\b/.test(upperQuery)) {
    suggestions.push('¿Olvidaste la cláusula FROM? Ejemplo: SELECT * FROM tabla');
  }
  if (upperQuery.includes('WHERE') && !['SELECT', 'UPDATE', 'DELETE'].some(kw => upperQuery.startsWith(kw))) {
    suggestions.push('WHERE generalmente se usa con SELECT, UPDATE o DELETE.');
  }

  // 3. Parseo con node-sql-parser
  try {
    parser.astify(trimmedQuery, { database: 'MySQL' });

    // Éxito
    if (suggestions.length === 0) {
      suggestions.push('✅ Tu consulta SQL tiene una estructura correcta.');
    }
    return { valid: true, errors: [], suggestions };
  } catch (err) {
    // 4. Extracción de línea
    let line = 1;
    const lineMatch = err.message && err.message.match(/line\s*(\d+)/i);
    if (lineMatch) line = parseInt(lineMatch[1], 10);

    // 5. Traducción y limpieza del error
    let message = err.message || 'Error de sintaxis desconocido.';
    message = message.replace(/^Error:\s*/i, '');
    message = translateSQLError(message, trimmedQuery);

    errors.push({ line, message });

    // 6. Sugerencias específicas
    addSQLSuggestions(upperQuery, suggestions);

    return { valid: false, errors, suggestions };
  }
}

/**
 * Traduce errores comunes de node-sql-parser a español.
 */
function translateSQLError(message, query) {
  const upper = query.toUpperCase().trim();

  if (message.includes('Expected')) {
    return 'Error de sintaxis: se esperaba un token diferente. Revisa la estructura.';
  }
  if (message.includes('SyntaxError') || message.includes('parse error')) {
    return 'Error de sintaxis: la consulta no sigue la gramática SQL estándar.';
  }
  if (message.includes('Unexpected token')) {
    return 'Token inesperado. Verifica comillas, comas y palabras clave.';
  }
  return `Error de sintaxis: ${message}`;
}

/**
 * Agrega sugerencias basadas en errores comunes de escritura.
 */
function addSQLSuggestions(upperQuery, suggestions) {
  if (upperQuery.startsWith('SELECT') && !upperQuery.includes('FROM')) {
    suggestions.push('Las consultas SELECT requieren FROM. Ejemplo: SELECT col FROM tabla');
  }
  if (upperQuery.startsWith('INSERT') && !upperQuery.includes('INTO')) {
    suggestions.push('INSERT requiere INTO. Ejemplo: INSERT INTO tabla VALUES (...)');
  }
  if (upperQuery.startsWith('UPDATE') && !upperQuery.includes('SET')) {
    suggestions.push('UPDATE requiere SET. Ejemplo: UPDATE tabla SET col = val');
  }
  if (upperQuery.startsWith('DELETE') && !upperQuery.includes('FROM')) {
    suggestions.push('DELETE requiere FROM. Ejemplo: DELETE FROM tabla WHERE...');
  }
  if (upperQuery.includes('FORM') && !upperQuery.includes('FROM')) {
    suggestions.push('¿Quisiste escribir FROM en lugar de FORM?');
  }
  if (upperQuery.includes('SELET') || upperQuery.includes('SELCT')) {
    suggestions.push('¿Quisiste escribir SELECT?');
  }
  suggestions.push('Revisa que las palabras clave estén bien escritas y en el orden correcto.');
}

// ============================================
//  VALIDADOR NoSQL (MongoDB)
// ============================================

/**
 * Valida una consulta MongoDB en formato JSON.
 * @param {string} query - String JSON con la consulta
 * @returns {{ valid: boolean, errors: Array, suggestions: Array }}
 */
function validateNoSQL(query) {
  const errors = [];
  const suggestions = [];

  const trimmed = query.trim();
  if (!trimmed) {
    return {
      valid: false,
      errors: [{ line: 1, message: 'La consulta está vacía.' }],
      suggestions: [
        'Escribe una consulta MongoDB en formato JSON.',
        'Ejemplo: { "find": "usuarios", "filter": { "edad": { "$gt": 18 } } }'
      ]
    };
  }

  // 1. Parseo JSON
  let parsed;
  try {
    parsed = JSON.parse(trimmed);
  } catch (jsonError) {
    const lineInfo = extractJSONErrorLine(trimmed, jsonError);
    errors.push({
      line: lineInfo.line,
      message: `JSON inválido: ${translateJSONError(jsonError.message)}`
    });
    suggestions.push('Verifica: llaves balanceadas, comillas dobles, comas entre propiedades.');
    suggestions.push('Usa JSONLint (https://jsonlint.com) para depurar.');
    return { valid: false, errors, suggestions };
  }

  // 2. Validación estructura base
  if (typeof parsed !== 'object' || Array.isArray(parsed) || parsed === null) {
    errors.push({ line: 1, message: 'La consulta debe ser un objeto JSON {}.' });
    suggestions.push('Ejemplo: { "find": "coleccion", "filter": {} }');
    return { valid: false, errors, suggestions };
  }

  // 3. Detectar comando
  const keys = Object.keys(parsed);
  if (keys.length === 0) {
    errors.push({ line: 1, message: 'El objeto está vacío. Agrega un comando MongoDB.' });
    suggestions.push('Comandos: find, insertOne, updateOne, deleteOne, aggregate, etc.');
    return { valid: false, errors, suggestions };
  }

  const command = keys.find(k => MONGO_COMMANDS.includes(k));
  if (!command) {
    errors.push({
      line: 1,
      message: `Comando no válido. Soportados: ${MONGO_COMMANDS.join(', ')}.`
    });
    suggestions.push(`Usa: ${MONGO_COMMANDS.slice(0, 6).join(', ')}, etc.`);
  }

  // 4. Validar operadores recursivamente
  const operatorErrors = validateMongoOperators(parsed, []);
  errors.push(...operatorErrors);

  // 5. Validación específica por comando
  if (command) {
    const cmdResult = validateMongoCommand(command, parsed);
    errors.push(...cmdResult.errors);
    suggestions.push(...cmdResult.suggestions);
  }

  // 6. Sugerencias positivas
  if (errors.length === 0) {
    suggestions.push('✅ Tu consulta MongoDB tiene una estructura válida.');
    if (['find', 'findOne'].includes(command)) {
      suggestions.push('Tip: Usa "projection" para seleccionar campos específicos.');
    }
    if (command === 'aggregate') {
      suggestions.push('Tip: El pipeline soporta $match, $group, $sort, $project, etc.');
    }
  }

  return { valid: errors.length === 0, errors, suggestions };
}

/**
 * Valida operadores MongoDB recursivamente en el objeto.
 */
function validateMongoOperators(obj, path) {
  const errors = [];

  if (typeof obj !== 'object' || obj === null) return errors;

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = [...path, key].join('.');

    // Clave que empieza con $ → debe ser operador conocido
    if (key.startsWith('$')) {
      if (!MONGO_OPERATORS.includes(key)) {
        errors.push({
          line: 1,
          message: `Operador desconocido "${key}" en ${currentPath}.`
        });
      }
      // Validación de tipos según operador
      if ((key === '$in' || key === '$nin' || key === '$all') && !Array.isArray(value)) {
        errors.push({
          line: 1,
          message: `"${key}" requiere un array. Ej: { "${key}": [1,2,3] }`
        });
      }
      if ((key === '$and' || key === '$or' || key === '$nor') && !Array.isArray(value)) {
        errors.push({
          line: 1,
          message: `"${key}" requiere array de condiciones. Ej: { "${key}": [{}, {}] }`
        });
      }
    }

    // Recursión en objetos
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      errors.push(...validateMongoOperators(value, [...path, key]));
    }
    // Recursión en arrays
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

/**
 * Validaciones específicas por comando MongoDB.
 */
function validateMongoCommand(command, parsed) {
  const errors = [];
  const suggestions = [];

  switch (command) {
    case 'find':
    case 'findOne':
      if (typeof parsed[command] !== 'string' || !parsed[command]) {
        errors.push({ line: 1, message: `"${command}" necesita nombre de colección (string).` });
        suggestions.push(`Ejemplo: { "${command}": "coleccion", "filter": {} }`);
      }
      if (parsed.filter !== undefined && (typeof parsed.filter !== 'object' || Array.isArray(parsed.filter))) {
        errors.push({ line: 1, message: '"filter" debe ser objeto {}.' });
      }
      break;

    case 'insertOne':
      if (!parsed.document || typeof parsed.document !== 'object') {
        errors.push({ line: 1, message: '"insertOne" requiere campo "document" (objeto).' });
        suggestions.push('Ejemplo: { "insertOne": "col", "document": { "nombre": "Juan" } }');
      }
      break;

    case 'insertMany':
      if (!parsed.documents || !Array.isArray(parsed.documents)) {
        errors.push({ line: 1, message: '"insertMany" requiere "documents" (array de objetos).' });
        suggestions.push('Ejemplo: { "insertMany": "col", "documents": [{}, {}] }');
      }
      break;

    case 'updateOne':
    case 'updateMany':
      if (!parsed.filter || typeof parsed.filter !== 'object') {
        errors.push({ line: 1, message: `"${command}" requiere "filter".` });
      }
      if (!parsed.update || typeof parsed.update !== 'object') {
        errors.push({ line: 1, message: `"${command}" requiere "update" (operadores $set, $inc, etc).` });
        suggestions.push('Ej: "update": { "$set": { "campo": "valor" } }');
      }
      break;

    case 'deleteOne':
    case 'deleteMany':
      if (!parsed.filter || typeof parsed.filter !== 'object') {
        errors.push({ line: 1, message: `"${command}" requiere "filter".` });
        suggestions.push(`Ejemplo: { "${command}": "col", "filter": { "_id": "123" } }`);
      }
      break;

    case 'aggregate':
      if (typeof parsed[command] !== 'string') {
        errors.push({ line: 1, message: '"aggregate" necesita nombre de colección.' });
      }
      if (!parsed.pipeline || !Array.isArray(parsed.pipeline)) {
        errors.push({ line: 1, message: '"aggregate" requiere "pipeline" (array de etapas).' });
        suggestions.push('Ejemplo: { "aggregate": "ventas", "pipeline": [{ "$match": {} }] }');
      }
      break;
  }

  return { errors, suggestions };
}

/**
 * Intenta extraer número de línea desde error de JSON.parse.
 */
function extractJSONErrorLine(query, error) {
  const posMatch = error.message.match(/position\s+(\d+)/i);
  if (posMatch) {
    const pos = parseInt(posMatch[1], 10);
    const before = query.substring(0, pos);
    const line = (before.match(/\n/g) || []).length + 1;
    return { line };
  }
  return { line: 1 };
}

/**
 * Traduce errores comunes de JSON.parse a español.
 */
function translateJSONError(message) {
  if (message.includes('Unexpected token')) {
    return 'Token inesperado. Revisa comillas, comas, llaves.';
  }
  if (message.includes('Unexpected end of JSON input')) {
    return 'JSON incompleto. Faltan llaves/corchetes de cierre.';
  }
  if (message.includes('Expected double-quoted property name')) {
    return 'Claves deben estar entre comillas dobles. Ej: "clave": valor';
  }
  return message;
}

// ============================================
//  EXPORTACIÓN DE SERVICIOS
// ============================================

module.exports = {
  validateSQL,
  validateNoSQL,
  MONGO_OPERATORS,
  MONGO_COMMANDS
};
