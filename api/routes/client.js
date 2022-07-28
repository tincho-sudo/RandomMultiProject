const express = require("express");
const router = express();

const {
  registerClient,
  editClient,
  getClients,
  getClient,
} = require("../controllers/client");

router.post("/newclient", registerClient);
router.put("/modifyclient", editClient);
router.get("/clients", getClients);
router.get("/client/:email", getClient);

module.exports = router;
