const express = require("express");
const mongoose = require("mongoose");
const YapoMoto = require("./models/YapoMoto.js");
require('dotenv').config()

const yapo_motos = require('./scrapers/yapo_motos');

const cors = require("cors");
const app = express();
app.use(cors());
// Authenticated client, can make signed calls

// console.log(process.env.API_KEY)
// console.log(process.env.SECRET_KEY)


// const request = require("request-promise").defaults({
//   headers: {
//     Authorization: "apikey 8ea31c48-95c3-4bcf-9db1-d6ada47565f2",
//     NordApiVersion: 2
//   }
// });

app.listen(4000, async () => {
  console.log(process.env.MONGO_DB)
  await mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Server running on port: 4000");
})

app.get("/", async (req, res, next) => {
  // const symbol = req.query.symbol;
  const motos = await YapoMoto.find({})
  res.send({motos})
})

app.get("/motos/scrape", async(req, res, next) => {
  const motos_url = await yapo_motos.extraerUrlsPagina();
  const motos = await yapo_motos.scrapeDetailUrls(motos_url);
  res.send({motos})
})

app.get("/nordstrom", async (req, res, next) => {
  const numberOfTop = req.query.top;
  const keyword = encodeURIComponent(req.query.keyword);
  // res.send("Hello world");
  const url = 
    `https://query.ecommerce.api.nordstrom.com/api/queryresults/keywordsearch/?top=${numberOfTop}&IncludeFacets=false&Keyword=${keyword}`
  console.log(url);
  const json = await request.get(url);
  res.setHeader("Content-Type", "application/json")
  res.send(json)
})
