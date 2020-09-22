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
workanaJobSchema.statics.filtrar = function () {
  // const matches = await WorkanaJob.find(
  //   // { "name" : { $regex: /Ghost/, $options: 'i' } }
  //   { "descripcion" : { $regex: /.*crap.*/, $options: 'i' } }
  // )

  // return this.find({ 
  //     // name: new RegExp(name, 'i') 
  //   // "descripcion" : { $regex: /.*crap.*/, $options: 'i' }
  //   "descripcion" : { $regex: /.*ext.*/, $options: 'i' }
  // });

  return this.find({ $or: [
    { "descripcion" : { $regex: /.*crap.*/, $options: 'i' } },
    { "descripcion" : { $regex: /.*externo.*/, $options: 'i' } }
  ]
      // name: new RegExp(name, 'i') 
  });
}

const WorkanaJob = mongoose.model("WorkanaJob", workanaJobSchema);

module.exports = WorkanaJob;
