const express = require("express");
const router = express();

const {
  registerOrder,
  editOrder,
  getOrders,
  deleteOrder
} = require("../controllers/order");

router.post("/neworder", registerOrder);
router.put("/modifyorder", editOrder);
router.get("/orders", getOrders);
router.get("/deleteorder", deleteOrder);

module.exports = router;