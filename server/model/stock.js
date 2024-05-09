const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const StockSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    quantity: Number,
    price: Number,
    image: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png",
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
