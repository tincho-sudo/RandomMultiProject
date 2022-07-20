const mongoose = require("mongoose");
const paint = require("./paint");
const Schema = mongoose.Schema;

const Orders = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "clients",
  },
  paint: [{
    type: Schema.Types.ObjectId,
    ref: "paints",
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("orders", Orders);