const mongoose = require("mongoose");

const TelegramBotConfigSchema = new mongoose.Schema({
  name: String,
  codigo: String,
});
const TelegramBotConfig = mongoose.model("TelegramBotConfig", TelegramBotConfigSchema);

module.exports = TelegramBotConfig;
