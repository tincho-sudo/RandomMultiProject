const mongoose = require("mongoose");
const moment = require("moment");
const paintSchema = require("./paint");
const clientSchema = require("./client");
const Schema = mongoose.Schema;

const Orders = new Schema({
  client: {
    type: clientSchema.schema,
    ref: "clients",
    required: true,
  },
  paint: [
    {
      type: paintSchema.schema,
      ref: "paints",
      required: true,
    },
  ],
  statusZ: {
    tpye: Number,
    default: 0,
  },
  // Envio de la orden en X (entre 0 y 10 dias desde hoy (es indiferente) ) dias
  dateOfDelivery: {
    type: String,
    default: new Date(
      moment()
        .locale("es")
        .add(getRandomInt(10), "d")
        .format("MMM DD, YYYY HH:MM")
    ),
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

module.exports = mongoose.model("orders", Orders);
