const { PORT, MONGODB_URI } = require("dotenv").config();
module.exports = { ...process.env };
