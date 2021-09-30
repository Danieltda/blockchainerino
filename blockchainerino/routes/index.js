const router = require("express").Router();
const mongoose = require("mongoose");

//1. Import coingecko-api
// const CoinGecko = require("coingecko-api");

// //2. Initiate the CoinGecko API Client
// const CoinGeckoClient = new CoinGecko();

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
