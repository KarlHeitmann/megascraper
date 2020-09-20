// routes/index.js
const router = require('express').Router();
const workanajobsRoutes = require('./workanajobs');
const workana_job = require('../scrapers/workana_job');
const path = require('path');

// API routes
// router.use('/api/books', workanajobsRoutes);
router.use('/api/workana', workanajobsRoutes);

router.use('/scraper/workana', async(req, res, next) => {
  const pages = req.query.pages;
  console.log(pages);

  const vueltas = pages ? Number(pages) : 1;
  
  let workana_jobs = [];
  for (let i = 1; i <= vueltas; i++) {
    const workana_url = `https://www.workana.com/jobs?category=it-programming&language=es&page=${i}`;
    const { scrapedJobs } = await workana_job.scrapePage(workana_url);
    workana_jobs = workana_jobs.concat(scrapedJobs);
    // console.log(workana_jobs);
  }
  workana_job.insertWorkanaJobInMongoDb(workana_jobs);
  // console.log(workana_jobs)
  // bot.sendMessage(861511144, workana_jobs[0].titulo);
  res.send({workana_jobs});
})

// If no API routes are hit, send the React app
// router.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });

module.exports = router;
