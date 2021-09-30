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

  let coins = axiosResponse.data;

  // var result = coins.find((obj) => {
  //   return obj.id === 7455;
  // });

  console.log(result);

  // console.log(coins);

  res.render("portfolio");

  // console.log(axiosResponse.data);
});

// /* GET home page */
// router.get("/", async (req, res, next) => {
//   let data = await CoinGeckoClient.coins.fetch("ethereum", {}).market_data;
//   console.log(data);
//   res.render("index");
// });

// const axiosResponse = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {headers: {
//     "X-CMC_PRO_API_KEY": APIKEY,
//   })

// rp(requestOptions)
//   .then((response) => {
//     console.log("API call response:", response);
//   })
//   .catch((err) => {
//     console.log("API call error:", err.message);
//   });

module.exports = router;
