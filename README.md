# Overview

This project uses the MERN stack. You must run the server on the root folder, and in another terminal you must run the client application using react.
The react application lives in `client/` folder.

This is a project to scrape websites. It can deliver telegram alerts using the telegram API whenever a scraped element meets some criteria. You can view
this feature on this file: `backend/index.js`, the function you must checkout is called `scrapearYBuscar`.

# How to configure Telegram

This feature only works if you submit a telegram 
bot key (you must talk to the [BotFather](https://telegram.me/botfather) ) and also you must manually go to your Mongo DB and add a record that will have 
a chatID, so the server can communicate with you.

In order to get the telegram key, you must talk with the Bot Father (link provided above), and you can find
the documentation [here](https://core.telegram.org/bots).

The record you must add to your Mongo DB, it is a new document you must insert on a collection named `telegrambotconfigs`. The document must have two keys:
- name: String: it is the name of the person who will get the notifications
- chatId: Number: it is the chat id of the person who will get the notifications. How do you know which one is your chat id? you must talk with your bot
  created with the bot father, and by viewing your logs you can take the chat ID.


