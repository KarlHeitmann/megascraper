const mongoose = require("mongoose");

const yapoMoto = new mongoose.Schema({
  titulo: String,
  url: String,
  precio: Number,
  year: Number,
  kilometraje: Number,
  ciudad: String,
  fecha: Date,
  descripcion: String,
  cilindrada: Number
});
const YapoMoto = mongoose.model("YapoMoto", yapoMoto);

module.exports = YapoMoto;
