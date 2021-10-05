const router = require("express").Router();
const mongoose = require("mongoose");
const { error } = require("npmlog");
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
  const { ethereumAddress } = req.query;
  try {
    let balance = "";
    if (ethereumAddress) {
      balance = web3.utils.fromWei(await web3.eth.getBalance(ethereumAddress));
    }
    res.render("index", { totalEthereum: balance });
  } catch (err) {
    return err;
  }
});

module.exports = router;
