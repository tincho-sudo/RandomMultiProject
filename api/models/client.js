const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const Client = new Schema({
  email: String,
  password: String,
  name: String,
  surname: String,
  dir: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

Client.pre("save", async function (next) {
  let client = this;
  if (!client.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(client.password, salt);
  client.password = hash;
  next();
});

module.exports = mongoose.model("clients", Client);
