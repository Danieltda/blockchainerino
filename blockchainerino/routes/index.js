const router = require("express").Router();
const mongoose = require("mongoose");
const API_KEY_INFURA = process.env.API_KEY_INFURA;
// or using the web3 umbrella package
const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider(
  `https://mainnet.infura.io/v3/${API_KEY_INFURA}`
);
const web3 = new Web3(provider);

// // 1. Import coingecko-api
// const CoinGecko = require("coingecko-api");

// //2. Initiate the CoinGecko API Client
// const CoinGeckoClient = new CoinGecko();

/* GET home page */
router.get("/", async (req, res, next) => {
  const balance = web3.utils.fromWei(
    await web3.eth.getBalance("0x79eB66260FC67B9560deF2900AF925FAB4d8D85c")
  );
  res.render("index");
  console.log(balance);
});

module.exports = router;
