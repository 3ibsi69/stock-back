const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;
const BonDeLivraisonSchema = new mongoose.Schema(
  {
    to: String,
    from: String,
    PaimentMethod: String,
    timbreFiscal: Boolean,
    giveRemise: Boolean,
    Remise: Number,
    products: [
      {
        code: String,
        name: String,
        designation: String,
        category: String,
        prixAchatHT: Number,
        prixVenteHT: Number,
        MargeHT: String,
        quantite: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const bonDeLivraison = mongoose.model("bonDeLivraison", BonDeLivraisonSchema);

module.exports = bonDeLivraison;
