const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const workana_job = require('./scrapers/workana_job');

const routes = require('./routes');
const TelegramBot = require('node-telegram-bot-api');
const WorkanaJob = require('./models/WorkanaJob');
const TelegramBotConfig = require("./models/TelegramBotConfig");
const cors = require("cors");
const { inicializarBot } = require("./telegram/bot");


const app = express();
app.use(cors());

const token_bot = process.env.SCRAPERO_BOT_KEY;

let bot
if (token_bot) {
  bot = new TelegramBot(token_bot, {polling: true});
  console.log("TIENE BOT")
  inicializarBot(bot)
} else {
  console.log("NO HAY TELEGRAM BOT PORQUE FALTA SU LLAVE");
}

// Authenticated client, can make signed calls

// console.log(process.env.API_KEY)
// console.log(process.env.SECRET_KEY)


// const request = require("request-promise").defaults({
//   headers: {
//     Authorization: "apikey 8ea31c48-95c3-4bcf-9db1-d6ada47565f2",
//     NordApiVersion: 2
//   }
// });

app.use(express.static('client/build'));

app.use(routes);

const PORT = process.env.PORT || 4000;
const INTERVALO = process.env.INTERVALO || 600000

const scrapearYBuscar = async() => {

  const workana_url = `https://www.workana.com/jobs?category=it-programming&language=es&page=1`;
  const { scrapedJobs } = await workana_job.scrapePage(workana_url);
  console.log("Scrapeado");
  workana_job.insertWorkanaJobInMongoDb(scrapedJobs);
  console.log("Terminado el scraping");
  console.log("Scrapeado los jobs, buscando job que haga match");
  // const matches = await WorkanaJob.find(
  //   // { "name" : { $regex: /Ghost/, $options: 'i' } }
  //   { "descripcion" : { $regex: /.*crap.*/, $options: 'i' } }
  // )
  const matches = await WorkanaJob.filtrarScraper()
  console.log(matches)
  const cuentas = await TelegramBotConfig.find({});
  let texto = ""
  matches.forEach(match => {
    texto += `Titulo: ${match.titulo}\nurl: ${match.url}\nprecio: ${match.precio}\n\n`
  })
  cuentas.forEach(cuenta => {
    // bot.sendMessage(861511144, workana_jobs[0].titulo);
    bot.sendMessage(cuenta.chatId, texto);
  });
  
  console.log(matches)

}

app.listen(PORT, async () => {
  console.log(process.env.MONGO_DB)
  await mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  scrapearYBuscar()
  setInterval(async function() {
    console.log("Lanzando scraper");
    scrapearYBuscar()
  //code for the drums playing goes here
  // 600000 = 1 minuto
  //  60000 = 1 minuto
  //   1000 = 1 segundo
  },  INTERVALO);
  // }, 600000);

  console.log("Server running on port: 4000");
})
