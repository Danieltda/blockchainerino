const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Portfolio = require("../models/Portfolio.model");
const axios = require("axios");
const APIKEY = process.env.API_KEY;

router.get("/", async (req, res) => {
  res.render("myportfolio");
});
module.exports = router;
