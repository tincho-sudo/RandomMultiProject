const mongoose = require("mongoose");
const moment = require("moment");
const paint = require("./paint");
const Schema = mongoose.Schema;

console.log(getRandomInt(10));
const Orders = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "clients",
    required: true,
  },
  paint: [
    {
      type: Schema.Types.ObjectId,
      ref: "paints",
      required: true,
    },
  ],
  status: {
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
