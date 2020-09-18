const mongoose = require("mongoose");

const yapoMoto = new mongoose.Schema({
  titulo: String,
  url: String,
  precio: String,
  year: String,
  kilometraje: String,
  ciudad: String,
  fecha: Date,
  descripcion: String,
  cilindrada: String
});
const YapoMoto = mongoose.model("YapoMoto", yapoMoto);

module.exports = YapoMoto;
