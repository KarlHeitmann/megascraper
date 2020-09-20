const express = require("express");
const mongoose = require("mongoose");
const YapoMoto = require("./models/YapoMoto.js");
require('dotenv').config()

const yapo_motos = require('./scrapers/yapo_motos');
const workana_job = require('./scrapers/workana_job');

const TelegramBot = require('node-telegram-bot-api');
const token_bot = process.env.SCRAPERO_BOT_KEY;
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

app.listen(4000, async () => {
  console.log(process.env.MONGO_DB)
  await mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Server running on port: 4000");
})

app.get("/", async (req, res, next) => {
  // const symbol = req.query.symbol;
  const motos = await YapoMoto.find({})
  res.send({motos})
})

app.get("/motos/scrape", async(req, res, next) => {
  const motos_url = await yapo_motos.extraerUrlsPagina();
  const motos = await yapo_motos.scrapeDetailUrls(motos_url);
  res.send({motos})
})

app.get("/workana/scrape", async(req, res, next) => {
  const pages = req.query.pages
  console.log(pages)
  
  const workana_jobs = await workana_job.scrapePage()
  // console.log(workana_jobs)
  // bot.sendMessage(861511144, workana_jobs[0].titulo);
  res.send({workana_jobs})
})

app.get("/nordstrom", async (req, res, next) => {
  const numberOfTop = req.query.top;
  const keyword = encodeURIComponent(req.query.keyword);
  // res.send("Hello world");
  const url = 
    `https://query.ecommerce.api.nordstrom.com/api/queryresults/keywordsearch/?top=${numberOfTop}&IncludeFacets=false&Keyword=${keyword}`
  console.log(url);
  const json = await request.get(url);
  res.setHeader("Content-Type", "application/json")
  res.send(json)
})
