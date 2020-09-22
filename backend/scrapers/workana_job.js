const request = require('request-promise');
const cheerio = require('cheerio');
const moment = require('moment');
const WorkanaJob = require("../models/WorkanaJob");
const mongoose = require("mongoose");



function filtrarPrecio(_precio) {
  return _precio.trim()
}
function parseDateSpanish(_date, _lenguaje) {
  // 04 Septiembre, 2020 19:02
  var format_espanol = 'Do MMMM, YYYY h:mm';
  // ingles: 
  // September 20, 2020 17:24
  var format_ingles = 'MMMM Do, YYYY h:mm';
  var momento_variable = _lenguaje == 'es' ? moment(_date, format_espanol, 'es').toDate() :  moment(_date, format_ingles, 'en').toDate()
  // console.log(`::::::\n======\n${_date}\n=======\n:::::::::\n${momento_variable}`)
  return momento_variable
}

async function insertWorkanaJobInMongoDb(jobs) {
  const promises = jobs.map(async job => {
    const jobFromDb = await WorkanaJob.findOne({ url: job.url });
    try {
      if (!jobFromDb) {
        // Aqui esta el error.
        const newJob = new WorkanaJob(job);
        return newJob.save();
      }
    } catch(error) {
      console.error(error);
      return {}
    }
  });
  await Promise.all(promises);
}

async function scrapePage(_home_url) {
  const result = await request.get(_home_url);
  // console.log(result.slice(0,256))
  /*
  <html
  lang="en"
  xmlns:fb="http://ogp.me/ns/fb#"
  prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
  */
  const $ = await cheerio.load(result)
  const scrapedJobs = []
  const lenguaje = $('html').attr('lang')
  // console.log(lenguaje)
  if (lenguaje == 'es') {
    console.log("ESPANOL")
  } else if (lenguaje == 'en') {
    console.log("____ingles____")
  }
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
      const url_bruto = 'https://www.workana.com' + $(h2).find('a').attr('href');
      // console.log(url_bruto);
      // if (uri.indexOf("?") > 0) {
      //   var clean_uri = uri.substring(0, uri.indexOf("?"));
      //   window.history.replaceState({}, document.title, clean_uri);
      // }
      const url_clean = url_bruto.indexOf("?") > 0 ? url_bruto.substring(0, url_bruto.indexOf("?")) : url_bruto;
      job.url = url_clean;
      // console.log(job.url)
      job.precio = filtrarPrecio(
        $(element).find('h4.budget').text()
      );
      job.fecha_publicacion = parseDateSpanish(
        $(element).find('.date').attr('title'),
        lenguaje
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
  // const home_url = "https://www.workana.com/jobs?category=it-programming&language=es"
  const home_url = "https://www.workana.com/jobs?category=it-programming&language=es&page=1";
  const { scrapedJobs } = await scrapePage(home_url);
  // console.log(scrapedJobs)
  await mongoose.connect(process.env.MONGO_ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  await insertWorkanaJobInMongoDb(scrapedJobs);
  mongoose.disconnect();
  // console.log(scrapedJobs);
}

module.exports = {
  main,
  scrapePage,
  insertWorkanaJobInMongoDb,
}