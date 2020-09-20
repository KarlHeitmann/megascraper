// routes/index.js
const router = require('express').Router();
const workanajobsRoutes = require('./workanajobs');
const yapomotosRoutes = require('./yapomotos');
const scrapersRoutes = require('./scrapers');
const workana_job = require('../scrapers/workana_job');
const yapo_motos = require('../scrapers/yapo_motos');
const path = require('path');

// API routes
// router.use('/api/books', workanajobsRoutes);
router.use('/api/workana', workanajobsRoutes);
router.use('/api/yapomotos', yapomotosRoutes);
router.use('/scrapers', scrapersRoutes);

module.exports = router;
