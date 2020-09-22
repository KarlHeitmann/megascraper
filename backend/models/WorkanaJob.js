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
// WorkanaJob.statics.findByName = function (name, cb) {
workanaJobSchema.statics.filtrarScraper = function () {
  return this.find(
    {
      $or: [
        { "descripcion" : { $regex: /.*scrap.*/, $options: 'i' } },
        { "descripcion" : { $regex: /.*extraer.*/, $options: 'i' } },
        { "titulo" : { $regex: /.*scrap.*/, $options: 'i' } },
        { "titulo" : { $regex: /.*extraer.*/, $options: 'i' } },
      ]
    }
  );
}

const WorkanaJob = mongoose.model("WorkanaJob", workanaJobSchema);

module.exports = WorkanaJob;
