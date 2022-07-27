const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const Paint = new Schema({
  name: String,
  color: String,
  price: Number,
  stock: Number,
  sku: String,
  // Nuevo envio de la pintura en X (entre 0 y 10 dias desde hoy) dias
  nextShipping: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

function getRandomInt(max) {
  if (max > 0) return Math.floor(Math.random() * max);
  else return Math.floor(Math.random() * max) + 1;
}

module.exports = mongoose.model("paints", Paint);
