const mongoose = require("mongoose");
const paintSchema = require("./paint");
const clientSchema = require("./client");
const Schema = mongoose.Schema;

const Orders = new Schema({
  client: {
    type: clientSchema.schema,
    ref: "clients",
    required: true,
    unique:false,
  },
  paint: [
    {
      type: paintSchema.schema,
      ref: "paints",
      required: true,
      unique:false,
    },
  ],
  statusZ: {
    type: Number,
    default: 0,
    required: true,
  },
  toPay: {
    type: Number,
    required: true,
    default: 0,
  },
  // Envio de la orden en X (entre 0 y 10 dias desde hoy (es indiferente) ) dias
  dateOfDelivery: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("orders", Orders);
