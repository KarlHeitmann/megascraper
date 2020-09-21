const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const workana_job = require('./scrapers/workana_job');

const token_bot = process.env.SCRAPERO_BOT_KEY;
const routes = require('./routes');
/*
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token_bot, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("CHAT ID");
  console.log(chatId);

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
*/


const cors = require("cors");
const app = express();
app.use(cors());
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
const INTERVALO = process.env.INTERVALO || 60000

app.listen(PORT, async () => {
  console.log(process.env.MONGO_DB)
  await mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  setInterval(async function() {
    console.log("Lanzando scraper");
    const workana_url = `https://www.workana.com/jobs?category=it-programming&language=es&page=1`;
    const { scrapedJobs } = await workana_job.scrapePage(workana_url);
    console.log("Scrapeado");
    workana_job.insertWorkanaJobInMongoDb(scrapedJobs);
    console.log("Terminado el scraping");
  //code for the drums playing goes here
  // 600000 = 1 minuto
  //  60000 = 1 minuto
  //   1000 = 1 segundo
  },  INTERVALO);
  // }, 600000);

  console.log("Server running on port: 4000");
})
