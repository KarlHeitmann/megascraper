const express = require("express");
const mongoose = require("mongoose");
const YapoMoto = require("./models/YapoMoto.js");
require('dotenv').config()

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
  console.log(process.env.MONGO_ATLAS_URL)
  await mongoose.connect(process.env.MONGO_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Server running on port: 4000");
})

app.get("/avg_price", async (req, res, next) => {
  const symbol = req.query.symbol;
  res.send({avg_price: "average price"})
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
