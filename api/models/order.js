const mongoose = require("mongoose");
const paint = require("./paint");
const Schema = mongoose.Schema;

const Orders = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "clients",
    required: true
  },
  paint: [
    {
      type: Schema.Types.ObjectId,
      ref: "paints",
      required: true
    },
  ],
  status: {
    tpye: Number,
    default: 0,
  },
  // Envio de la orden en X (entre 0 y 10 dias desde hoy (es indiferente) ) dias
  dateOfDelivery: {
    type: String,
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

module.exports = mongoose.model("orders", Orders);
