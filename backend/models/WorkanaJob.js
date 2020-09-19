const mongoose = require("mongoose");

const workanaJobSchema = new mongoose.Schema({
  titulo: String,
  url: String,
  precio: String,
  fecha_publicacion: Date,
  descripcion: String,
  deadline: String,
  propuestas: String,
});
const WorkanaJob = mongoose.model("WorkanaJob", workanaJobSchema);

module.exports = WorkanaJob;
