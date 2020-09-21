// routes/index.js
const router = require('express').Router();
const workanajobsRoutes = require('./workanajobs');
const yapomotosRoutes = require('./yapomotos');
const scrapersRoutes = require('./scrapers');
const path = require('path');

// API routes
// router.use('/api/books', workanajobsRoutes);
router.use('/api/workana', workanajobsRoutes);
router.use('/api/yapomotos', yapomotosRoutes);
router.use('/scrapers', scrapersRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
