const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Portfolio = require("../models/Portfolio.model");
const axios = require("axios");
const APIKEY = process.env.API_KEY;
const isLoggedIn = require("../middleware/isLoggedIn");
const toID = mongoose.Types.ObjectId;

router.get("/", isLoggedIn, async (req, res, next) => {
  const getCoins = axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY": APIKEY,
      },
    }
  );

  // console.log(getCoins);

  const portfolio = Portfolio.find({
    owner: req.user._id,
  });

  const [axiosResponse, portfolioFromUser] = await Promise.all([
    getCoins,
    portfolio,
  ]);
  // const axiosResponse = await axios.get(
  //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  //   {
  //     headers: {
  //       "X-CMC_PRO_API_KEY": APIKEY,
  //     },
  //   }
  // );

  let coinNames = axiosResponse.data.data.map((coin) => coin.name);

  let coinName = axiosResponse.data.data.map((coin) => ({
    coinname: coin.name,
    coinprice: coin.quote.USD.price,
  }));

  let coinPrice = axiosResponse.data.data.map((price) => price.quote.USD.price);

  // const portfolioFromUser = await Portfolio.find({
  //   owner: req.user._id,
  // });

  // console.log(portfolioFromUser);

  // console.log(Object(axiosResponse));

  // const portfolioUser = await Portfolio.find({ portfolioid: req.params });
  // console.log(portfolioUser);
  res.render("portfolio", {
    coinnames: coinNames,
    coinprice: coinPrice,
    coinname: coinName,
    personalPortfolio: portfolioFromUser,
  });
});

router.post("/", isLoggedIn, async (req, res) => {
  const { coin, currentPrice, amount, totalvalue } = req.body;
  try {
    await Portfolio.create({
      coin,
      currentPrice,
      amount,
      totalvalue,
      owner: req.user._id,
    });
    res.redirect("/portfolio");
  } catch (err) {
    console.error(err);
  }
});

// router.get("/", async(req,res) => {
//    const portfolio = Portfolio.find({
//      owner: req.user._id,
//    });

// })

router.get(":id", isLoggedIn, async (req, res) => {});

module.exports = router;
