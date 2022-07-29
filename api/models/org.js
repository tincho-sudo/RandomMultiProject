const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Org = new Schema({
  name: { type: String, require: true, unique: true },
  employees: Number,
  dir: String,
  phone: String,
  totalSales: Number,
  totalRevenue: Number,
  totalStockQuant: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("org", Org);
