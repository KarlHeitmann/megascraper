const workana_job = require('../scrapers/workana_job');
const yapo_motos = require('../scrapers/yapo_motos');
const info_subvenciones = require('../scrapers/infosubvenciones');
const autos = require('../scrapers/autos');
const WorkanaJob = require("../models/WorkanaJob");

// TODO XXX: Quizas sea importante eliminar aqui los await, y reemplazarlos por
// las promesas

module.exports = {
  workana: async function(req, res) {
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

  },
  motos: async function(req, res) {
    
    // const motos_url = await yapo_motos.extraerUrlsPagina();
    // const motos = await yapo_motos.scrapeDetailUrls(motos_url);
    yapo_motos.extraerUrlsPagina().then(motos_url => {
      yapo_motos.scrapeDetailUrls(motos_url).then(motos => {
        yapo_motos.insertYapoMotoInMongoDb(motos)
        res.send({motos})
      })
    })
  },
  autos: async function(req, res) {
    console.log("hola")
    autos.index().then(auto => {
      console.log("exito")
      console.log(auto)
      res.send(auto)
    })
  },
  infosubvenciones: async function(req, res) {
    const pages = req.query.pages;
    info_subvenciones.initializeHeaders().then(headers => {
      info_subvenciones.scrapeRoot(headers, pages).then(data_result => {
        console.log(data_result)
        res.send(data_result)
      })
    })
  },
}
