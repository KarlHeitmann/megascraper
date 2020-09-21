const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const workana_job = require('./scrapers/workana_job');

const routes = require('./routes');
const TelegramBot = require('node-telegram-bot-api');
const cors = require("cors");

const TelegramBotConfig = require("./models/TelegramBotConfig");

const app = express();
app.use(cors());

const token_bot = process.env.SCRAPERO_BOT_KEY;

let bot
if (token_bot) {
  bot = new TelegramBot(token_bot, {polling: true});

  bot.onText(/\/start/, async (msg, match) => {
    const all_configs = await TelegramBotConfig.find({})
    console.log(all_configs)
    // all_configs.forEach(element => {
    //   console.log(element)
    // });

  
    // send a message to the chat acknowledging receipt of their message
    if (all_configs.length) {
      let mensaje = "Bienvenido\nLista de configuraciones guardadas"
      for (let i = 0; i < all_configs.length; i++) {
        const element = all_configs[i];
        mensaje = mensaje + element['name'] + ' - ' + element['codigo'];
      }
      bot.sendMessage(msg.chat.id, mensaje);
    } else {
      bot.sendMessage(msg.chat.id, `No tiene configuraciones guardadas`);

    }
    // bot.sendMessage(msg.chat.id,'COMENZANDO')
  })
  
  bot.onText(/\/guardar (.+)/, async(msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const name = match[1]; // the captured "whatever"
    const jobFromDb = await TelegramBotConfig.findOne({ chatId: chatId });
    try {
      if (!jobFromDb) {
        // Aqui esta el error.
        const telegram_bot_config = { name, chatId }
        const newTelegramBotConfig = new TelegramBotConfig(telegram_bot_config);
        console.log("Resultado de guardar TelegramBotConfig");
        console.log(await newTelegramBotConfig.save());
        bot.sendMessage(chatId, "Guardado en la base de datos")
      } else {
        bot.sendMessage(chatId, "Ya estaba guardado, no se hizo nada")
      }
    } catch(error) {
      console.error(error);
      bot.sendMessage(chatId, "Error al guardar el usuario en la base de datos")
    }
  });
  
  bot.onText(/\/borrar/, async(msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const name = match[1]; // the captured "whatever"
    const jobFromDb = await TelegramBotConfig.findOne({ chatId: chatId });
    try {
      if (jobFromDb) {
        // Aqui esta el error.
        console.log("Resultado de eliminar TelegramBotConfig");
        const res = await TelegramBotConfig.remove({ chatId });

        console.log(res);
        bot.sendMessage(chatId, "Borrado exitosamente")
      } else {
        bot.sendMessage(chatId, "No estaba guardado, no se hizo nada")
      }
    } catch(error) {
      console.error(error);
      bot.sendMessage(chatId, "Error al borrar el usuario en la base de datos")
    }
  });
  
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    console.log("CHAT ID");
    console.log(chatId);

    // const all_configs = await TelegramBotConfig.findOne({})
    // bot.sendMessage(chatId, all_configs);
  });
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
