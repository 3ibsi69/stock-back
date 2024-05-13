const FactureService = require("../service/factureService.js");
const StockService = require("../service/stockService.js");

module.exports = {
  async createFacture(req, res) {
    try {
      const data = req.body;
      for (const product of data.products) {
        const stockItem = await StockService.getStockById({ _id: product._id });
        if (stockItem) {
          stockItem.quantity -= product.quantity;
          await StockService.update(stockItem._id, stockItem);
        } else {
          throw new Error("Stock item not found");
        }
      }
      const facture = await FactureService.create(data);
      res.status(200).send(facture);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async getFactureById(req, res) {
    try {
      const id = req.params.id;
      const facture = await FactureService.getFactureById(id);
      res.status(200).send(facture);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getAllFacture(req, res) {
    try {
      const facture = await FactureService.getAllFacture();
      res.status(200).send(facture);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async deleteFacture(req, res) {
    try {
      const id = req.params.id;
      const facture = await FactureService.delete(id);
      res.status(200).send(facture);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async updateFacture(req, res) {
    try {
      const _id = req.params.id;
      const data = req.body;
      const facture = await FactureService.update(_id, data);
      res.status(200).send(facture);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
