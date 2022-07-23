const mongoose = require("mongoose");
const app = require("./app");

const { PORT, MONGODB_URI } = require("./config/env");
mongoose.connect(MONGODB_URI, () => {
  console.log("Conectado a DB");
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
});

