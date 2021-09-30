const { Schema, model } = require("mongoose");

const portfolioSchema = new Schema({
  coin: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;
