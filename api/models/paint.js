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
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("paints", Paint);
