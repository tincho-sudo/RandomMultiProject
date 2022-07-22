const express = require("express");
const router = express();

const {
  registerClient,
  editClient,
  getClients,
} = require("../controllers/client");

router.post("/newclient", registerClient);
router.put("/modifyclient", editClient);
router.get("/clients", getClients);

module.exports = router;
