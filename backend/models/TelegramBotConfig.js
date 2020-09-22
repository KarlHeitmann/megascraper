const mongoose = require("mongoose");

const TelegramBotConfigSchema = new mongoose.Schema({
  name: String,
  chatId: Number,
});
const TelegramBotConfig = mongoose.model("TelegramBotConfig", TelegramBotConfigSchema);

module.exports = TelegramBotConfig;
