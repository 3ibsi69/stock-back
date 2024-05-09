var Stock = require("../model/stock.js");

module.exports = new (class StockService {
  create(data) {
    return Stock.create(data);
  }
  getStockById(id) {
    return Stock.findOne({ _id: id });
  }
  getAllStock() {
    return Stock.find();
  }
  delete(id) {
    return Stock.findOneAndDelete({ _id: id });
  }

  update(_id, data) {
    return Stock.findOneAndUpdate({ _id: _id }, data);
  }
  filterCategory(data) {
    return Stock.find({ category: data });
  }
})();