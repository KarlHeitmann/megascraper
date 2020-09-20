const request = require('request-promise');
const cheerio = require('cheerio');
const moment = require('moment');
const WorkanaJob = require("../models/WorkanaJob");
const mongoose = require("mongoose");



function filtrarPrecio(_precio) {
  return _precio.trim()
}
function parseDateSpanish(_date) {
  // 04 Septiembre, 2020 19:02
  var format = 'Do MMMM, YYYY h:mm';

  return moment(_date, format, 'es').toDate()
}

async function insertWorkanaJobInMongoDb(jobs) {
  const promises = jobs.map(async job => {
    const jobFromDb = await WorkanaJob.findOne({ url: job.url });
    try {
      if (!jobFromDb) {
        const newJob = new WorkanaJob(job);
        return newJob.save();
      }
    } catch(error) {

    }
  });
  await Promise.all(promises);
}

async function scrapePage(_home_url) {
  const result = await request.get(_home_url);
  const $ = await cheerio.load(result)
  const scrapedJobs = []
  $('.project-item.js-project').each((index, element) => {
    let job = {
      titulo: null,
      url: null,
      precio: null,
      fecha_publicacion: null,
      deadline: null,
      propuestas: null,
      descripcion: null,
    }
    try {
      const h2 = $(element).find('h2');
      job.titulo = h2.text().trim();
      job.url = 'https://www.workana.com' + $(h2).find('a').attr('href');
      job.precio = filtrarPrecio(
        $(element).find('h4.budget').text()
      );
      job.fecha_publicacion = parseDateSpanish(
        $(element).find('.date').attr('title')
      );
      job.deadline = $(element).find('.deadline').text().trim();
      job.propuestas = $(element).find('.bids').text().trim();
      // console.log($('div').contents().first().text()) # hello
      // const descripcion = $($(element).find('.expander.js-expander-passed')).contents().first().text();
      // const descripcion = $(element).find('.expander.js-expander-passed').text();
      job.descripcion = $(element).find('div.html-desc.project-details').text().trim();
    } catch(error) {
      console.error(error);
    }

    
    // console.log(element)
    scrapedJobs.push(job)
  })
  return {
    scrapedJobs
  }
  ;
}

async function main() {
  const home_url = "https://www.workana.com/jobs?category=it-programming&language=es"
  const { scrapedJobs } = await scrapePage(home_url);
  console.log(scrapedJobs)
  await mongoose.connect(process.env.MONGO_ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  await insertWorkanaJobInMongoDb(scrapedJobs);
  mongoose.disconnect();
  console.log(scrapedJobs);
}

module.exports = {
  main,
  scrapePage,
}