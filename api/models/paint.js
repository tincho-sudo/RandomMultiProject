const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Paint = new Schema({
  name: String,
  color: String,
  price: Number,
  stock: Number,
  sku: String,
  // Nuevo envio de la pintura en X (entre 0 y 10 dias desde hoy) dias
  nextShipping: {
    type: Date,
    default: addDays(Date.Now, getRandomInt(10)),
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

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

module.exports = mongoose.model("paints", Paint);
