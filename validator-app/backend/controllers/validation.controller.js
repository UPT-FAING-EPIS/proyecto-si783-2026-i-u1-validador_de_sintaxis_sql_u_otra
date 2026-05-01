/**
 * validation.controller.js
 * Controlador - Orquestación de peticiones HTTP.
 * Recibe parámetros, delega al servicio, formatea respuesta.
 */

const { validateSQL, validateNoSQL, DIALECTS } = require('../services/validation.service');

/**
 * POST /api/validate
 * Valida una consulta SQL o NoSQL.
 * Body: { type: 'sql' | 'nosql', query: string, dialect?: string }
 */
function validateQuery(req, res, next) {
  try {
    const { type, query, dialect } = req.body;

    // 1. Validación de parámetros de entrada
    if (!type || !['sql', 'nosql'].includes(type.toLowerCase())) {
      const err = new Error('El campo "type" debe ser "sql" o "nosql".');
      err.statusCode = 400;
      return next(err);
    }

    if (query === undefined || query === null) {
      const err = new Error('El campo "query" es requerido.');
      err.statusCode = 400;
      return next(err);
    }

    // 2. Delegar al servicio apropiado
    let result;
    if (type.toLowerCase() === 'sql') {
      const sqlDialect = dialect && DIALECTS.includes(dialect) ? dialect : 'MySQL';
      result = validateSQL(query, sqlDialect);
    } else {
      result = validateNoSQL(query);
    }

    // 3. Devolver respuesta exitosa
    return res.json(result);

  } catch (err) {
    // 4. Errores inesperados → pasar al errorHandler middleware
    next(err);
  }
}

/**
 * GET /api/health
 * Health check para monitoreo
 */
function healthCheck(req, res) {
  res.json({
    status: 'ok',
    message: 'SQL/NoSQL Validator API funcionando correctamente.',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
}

/**
 * GET /api/examples
 * Devuelve ejemplos precargados de consultas SQL y MongoDB
 */
function getExamples(req, res) {
  res.json({
    sql: [
      {
        label: 'SELECT básico (MySQL)',
        query: 'SELECT * FROM usuarios WHERE edad > 18 ORDER BY nombre ASC;'
      },
      {
        label: 'SELECT con JOIN',
        query: `SELECT u.nombre, p.descripcion
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
WHERE u.activo = 1;`
      },
      {
        label: 'INSERT',
        query: `INSERT INTO productos (nombre, precio, stock)
VALUES ('Laptop', 1299.99, 50);`
      },
      {
        label: 'UPDATE con WHERE',
        query: `UPDATE empleados
SET salario = salario * 1.10
WHERE departamento = 'Tecnología';`
      },
      {
        label: 'DELETE seguro',
        query: 'DELETE FROM sesiones WHERE fecha_expiracion < NOW();'
      },
      {
        label: 'PostgreSQL - RETURNING',
        query: `UPDATE usuarios
SET activo = false
WHERE ultimo_login < '2023-01-01'
RETURNING id, nombre;`
      },
      {
        label: 'SQLite - LIMIT/OFFSET',
        query: `SELECT * FROM productos
ORDER BY nombre
LIMIT 10 OFFSET 20;`
      },
      {
        label: 'SQL con error',
        query: 'SELCT nombre FORM usuarios WERE id = 1;'
      }
    ],
    nosql: [
      {
        label: 'find() básico',
        query: JSON.stringify({
          find: 'usuarios',
          filter: { activo: true }
        }, null, 2)
      },
      {
        label: 'find() con operadores',
        query: JSON.stringify({
          find: 'productos',
          filter: {
            precio: { $gte: 100, $lte: 500 },
            categoria: { $in: ['electrónica', 'hogar'] }
          },
          projection: { nombre: 1, precio: 1, _id: 0 }
        }, null, 2)
      },
      {
        label: 'insertOne()',
        query: JSON.stringify({
          insertOne: 'clientes',
          document: {
            nombre: 'María García',
            email: 'maria@example.com',
            edad: 28,
            ciudad: 'Madrid'
          }
        }, null, 2)
      },
      {
        label: 'updateOne() con $set',
        query: JSON.stringify({
          updateOne: 'usuarios',
          filter: { _id: '64abc123' },
          update: {
            $set: { activo: false, fecha_baja: '2024-01-15' },
            $inc: { intentos_login: 1 }
          }
        }, null, 2)
      },
      {
        label: 'aggregate() pipeline',
        query: JSON.stringify({
          aggregate: 'ventas',
          pipeline: [
            { $match: { anio: 2024 } },
            { $group: { _id: '$categoria', total: { $sum: '$monto' } } },
            { $sort: { total: -1 } },
            { $limit: 10 }
          ]
        }, null, 2)
      },
      {
        label: 'updateOne() con $mod',
        query: JSON.stringify({
          updateOne: 'articulos',
          filter: { version: { $mod: [2, 0] } },
          update: { $set: { es_par: true } }
        }, null, 2)
      },
      {
        label: 'updateOne() con $text',
        query: JSON.stringify({
          updateOne: 'posts',
          filter: { $text: { $search: 'mongodb' } },
          update: { $set: { etiquetado: true } }
        }, null, 2)
      },
      {
        label: 'startSession() - Transacción',
        query: JSON.stringify({
          startSession: 'session1',
          withTransaction: {
            updateOne: 'cuentas',
            filter: { _id: 'user1' },
            update: { $inc: { saldo: -100 } }
          }
        }, null, 2)
      },
      {
        label: 'enableSharding()',
        query: JSON.stringify({
          enableSharding: 'miDB',
          shardCollection: 'miDB.collection',
          key: { campoShard: 1 }
        }, null, 2)
      },
      {
        label: 'NoSQL con error',
        query: '{ find: "usuarios", filter: { $unknownOp: true }'
      }
    ]
  });
}

module.exports = {
  validateQuery,
  healthCheck,
  getExamples
};
