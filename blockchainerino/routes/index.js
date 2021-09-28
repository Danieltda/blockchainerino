const router = require("express").Router();
const axios = require("axios");
const APIKEY = process.env.API_KEY;

//1. Import coingecko-api
// const CoinGecko = require("coingecko-api");

//2. Initiate the CoinGecko API Client
// const CoinGeckoClient = new CoinGecko();

/* GET home page */
// router.get("/", async (req, res, next) => {
//   let data = await CoinGeckoClient.coins.fetch("ethereum", {}).market_data;
//   console.log(data);
//   res.render("index");
// });

// const axiosResponse = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {headers: {
//     "X-CMC_PRO_API_KEY": APIKEY,
//   })

router.get("/", async (req, res, next) => {
  const axiosResponse = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY": APIKEY,
      },
    }
  );

  res.render("index");

  console.log(axiosResponse);
});

// rp(requestOptions)
//   .then((response) => {
//     console.log("API call response:", response);
//   })
//   .catch((err) => {
//     console.log("API call error:", err.message);
//   });

module.exports = router;
