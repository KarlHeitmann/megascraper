const TelegramBotConfig = require("../models/TelegramBotConfig");
const WorkanaJob = require("../models/WorkanaJob");

function inicializarBot(bot) {
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    // console.log(callback_query)
    console.log("inicio")
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    console.log("inicio")
    const opts = {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
    };
    let text;

    if (action === 'edit') {
      text = 'Edited Text';
    }
    console.log("inicio")
    console.log(callbackQuery)

    // bot.editMessageText(text, opts);
  });

  bot.onText(/\/ver/, async(msg, match) => {
    const accounts = await TelegramBotConfig.find({})
    const workana_jobs = await WorkanaJob.filtrarScraper()
    let texto = ''
    workana_jobs.forEach(workana_job => {
      texto += `Deshabilitado: ${workana_job.deshabilitado}\nTitulo: ${workana_job.titulo}\nurl: ${workana_job.url}\nprecio: ${match.precio}\n\n`
    });
    botones = workana_jobs.map(workana_job => {
      return {
        text: workana_job.titulo,
        callback_data: JSON.stringify({
          'command': 'inhabilitar',
          '_id': workana_job._id
        })
      }
    })
    // console.log(botones)
    const opts = {
      reply_markup: {
        inline_keyboard: [ botones ]
      }
    }
    // const opts = {
    //   reply_markup: {
    //     inline_keyboard: [
    //       [
    //         {
    //           text: 'EUR',
    //           callback_data: JSON.stringify({
    //             'command': 'price',
    //             'base': 'EUR'
    //           })
    //         },
    //         {
    //           text: 'USD',
    //           callback_data: JSON.stringify({
    //             'command': 'price',
    //             'base': 'USD'
    //           })
    //         }
    //       ]
    //     ]
    //   }
    // };
    bot.sendMessage(msg.chat.id, texto, opts);
  })
  bot.onText(/\/disable (.+)/, async(msg, match) => {
    console.log("DISABLE")
    const accounts = await TelegramBotConfig.find({})
    const workana_jobs = await WorkanaJob.filtrarScraper()


    let texto = ''
    workana_jobs.forEach(workana_job => {
      texto += `Deshabilitado: ${workana_job.deshabilitado}\nTitulo: ${workana_job.titulo}\nurl: ${workana_job.url}\nprecio: ${match.precio}\n\n`
    });
    // workana_jobs[]

    console.log(accounts)

    bot.sendMessage(msg.chat.id, texto)
  })

  bot.onText(/\/start/, async (msg, match) => {
    const all_configs = await TelegramBotConfig.find({})
    let mensaje = "Bienvenido\nLista de configuraciones guardadas:\n"
    if (all_configs.length) {
      for (let i = 0; i < all_configs.length; i++) {
        const element = all_configs[i];
        mensaje = mensaje + element['name'] + ' - ' + element['chatId'];
      }
    } else {
      mensaje = mensaje + "\nNo tiene configuraciones guardadas"
      
    }
    mensaje = mensaje + '\n\nOpciones:\n\/guardar texto: guardar mi chat para notificaciones\n\/borrar: me borra de la lista para notificaciones'
    bot.sendMessage(msg.chat.id, mensaje);
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
}

// export default inicializarBot;

module.exports = {
  inicializarBot,
}