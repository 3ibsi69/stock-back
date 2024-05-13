const mongoose = require("mongoose");
const db = require("./connection.js");
const Stock = require("./stock.js");
mongoose.Promise = global.Promise;
const FactureSchema = new mongoose.Schema(
  {
    to: String,
    from: String,
    products: [],
  },
  {
    timestamps: true,
  }
);

const Facture = mongoose.model("Facture", FactureSchema);

module.exports = Facture;
