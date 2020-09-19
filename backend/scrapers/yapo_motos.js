const defaultOptions = {
  headers: {
    "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:63.0) Gecko/20100101 Firefox/63.0"
  },
  jar: true,
}
const request = require('request-promise').defaults(defaultOptions);
const cheerio = require('cheerio');
// const moment = require('moment');
const YapoMoto = require("../models/YapoMoto");
const mongoose = require("mongoose");

const home_url = 'https://www.yapo.cl/valparaiso/motos?ca=6_s&l=0&w=1&cmn=&st=s';
// const home_url = 'https://www.yapo.cl/valparaiso/motos';

async function insertYapoMotoInMongoDb(motos) {
  const promises = motos.map(async moto => {
    const motoFromDb = await YapoMoto.findOne({ url: moto.url });
    if (!motoFromDb) {
      console.log("no hay moto")
      const newMoto = new YapoMoto(moto);
      return newMoto.save();
    } else {
      console.log("TENEMOS MOTO")
    }
  });
  await Promise.all(promises);
}

async function scrapeDetail(moto_url) {
  const result = await request.get(moto_url);
  const $ = await cheerio.load(result);
  const descripcion = $('.description').text().trim();
  const titulo = $('#da_subject').text().trim();
  const fecha = $('div.title-main > small > time').attr('datetime');
  const filas_detalles = $('tr');
  let _moto = {
    titulo: titulo,
    url: moto_url,
    precio: null,
    year: null,
    kilometraje: null,
    ciudad: null,
    fecha: Date(fecha),
    descripcion: descripcion,
    cilindrada: null,
  }
  for (let i = 0; i < filas_detalles.length; i++) {
    const element = filas_detalles[i];
    if (i == 0) { // Precio
      _moto.precio = $(element).find('strong').text().trim().replace(/\./g,'')
      console.log(_moto.precio)
    } else if (i == 1) { // year
      _moto.year = $(element).find('td').text().trim()
      console.log(_moto.year)
    } else if (i == 2) { // kilometros
      _moto.kilometraje = $(element).find('td').text().trim()
      console.log(_moto.kilometraje)
    } else if (i == 3) { // cilindradas
      _moto.cilindrada = $(element).find('td').text().trim().replace(' cc', '')
      console.log(_moto.cilindrada)
    } else if (i == 4) { // tipo
      _moto.tipo = $(element).find('td').text().trim()
      console.log(_moto.tipo)
    }

  }
 return _moto;
}

async function extraer_todo() {
  const result = await request.get(home_url);
  const $ = await cheerio.load(result);
  const motos = [];
  const motos_html = $('.ad.listing_thumbs')
  // const pruebas = 5;
  // for (let i=0; i < pruebas; i++) {
  for (let i=0; i < motos_html.length; i++) {
    let element = motos_html[i];
    let url
    try {
      url = $(element).find('.title').attr('href');
      const moto = await scrapeDetail(url);
      motos.push(moto)
    } catch (error) {
      console.error(error);
      console.error(url)
      console.error("ERROR: moto.url no se ha podido parsear");
    }
  }
  return motos
}

async function main() {
  const motos = await extraer_todo();
  console.log("::::")
  console.log(motos);
  await mongoose.connect(process.env.MONGO_ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  await insertYapoMotoInMongoDb(motos);
  mongoose.disconnect();
  console.log("MAin");
}


// main();

module.exports = {
  main,
  extraer_todo,
}
