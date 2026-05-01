/**
 * server.js
 * Servidor Express principal - Patrón MVC
 * Separa claramente: routes, controllers, services, middleware
 *
 * Compatible con Vercel Serverless Functions (exportación condicional)
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

// Importar capas MVC
const { logger } = require('./middleware/logger.middleware');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler.middleware');
const validateRoutes = require('./routes/validate.routes');

// Crear aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────────────
//  MIDDLEWARES GLOBALES (orden importa)
// ─────────────────────────────────────────────

// 1. CORS - permitir todo (desarrollo)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Body parsers - límite aumentado para consultas largas
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// 3. Logger - log de each request
app.use(logger);

// ─────────────────────────────────────────────
//  RUTAS DE LA API
// ─────────────────────────────────────────────

// Montar rutas bajo prefijo /api
app.use('/api', validateRoutes);

// ─────────────────────────────────────────────
//  ARCHIVOS ESTÁTICOS (FRONTEND SPA)
// ─────────────────────────────────────────────

const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath, {
  maxAge: '1d', // cacheo estático por 1 día
  etag: true
}));

// SPA fallback - todas las rutas no API devuelven index.html
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendPath, 'index.html'));
  }
});

// ─────────────────────────────────────────────
//  MANEJO DE ERRORES (orden: 404 → 500)
// ─────────────────────────────────────────────

app.use(notFoundHandler); // 404 para rutas no encontradas
app.use(errorHandler);    // 500 para errores no capturados

// ─────────────────────────────────────────────
//  INICIO DEL SERVIDOR
// ─────────────────────────────────────────────

// Solo iniciar servidor HTTP si NO estamos en Vercel (serverless)
if (process.env.VERCEL !== 'true') {
  app.listen(PORT, () => {
    console.log('');
    console.log('╔══════════════════════════════════════════╗');
    console.log('║   SQL/NoSQL Syntax Validator             ║');
    console.log('║   API Server (MVC Refactorizado)         ║');
    console.log('╠══════════════════════════════════════════╣');
    console.log(`║   🌐 URL: http://localhost:${PORT}           ║`);
    console.log(`║   🔧 API: http://localhost:${PORT}/api       ║`);
    console.log(`║   💊 Health: http://localhost:${PORT}/api/health ║`);
    console.log('╚══════════════════════════════════════════╝');
    console.log('');
  });
}

// ─────────────────────────────────────────────
//  EXPORTACIÓN PARA VERCEL / PRUEBAS
// ─────────────────────────────────────────────

module.exports = app;
