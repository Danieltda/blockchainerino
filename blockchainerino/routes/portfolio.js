const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Portfolio = require("../models/Portfolio.model");
const axios = require("axios");
const APIKEY = process.env.API_KEY;

router.get("/", async (req, res, next) => {
  const axiosResponse = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY": APIKEY,
      },
    }
  );

  let coinNames = axiosResponse.data.data.map((coin) => coin.name);

  let coinName = axiosResponse.data.data.map((coin) => ({
    coinname: coin.name,
    coinprice: coin.quote.USD.price,
  }));

  let coinPrice = axiosResponse.data.data.map((price) => price.quote.USD.price);

  // console.log(Object(axiosResponse));

  res.render("portfolio", {
    coinnames: coinNames,
    coinprice: coinPrice,
    coinname: coinName,
  });
});

router.post("/", async (req, res) => {
  const { coin, currentPrice, amount, totalvalue } = req.body;
  try {
    await Portfolio.create({
      coin,
      currentPrice,
      amount,
      totalvalue,
    });
    // res.render({ newcoin: coinValue });
    res.redirect("/portfolio");
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
