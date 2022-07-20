const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Paint = new Schema({
  name: String,
  color: String,
  price: Number,
  stock: Number,
  sku: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("paints", Paint);