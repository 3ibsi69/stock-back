const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const StockSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    quantity: Number,
    price: Number,
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
