const express = require("express");
const router = express();

const {
  registerOrder,
  editOrder,
  getOrders,
  deleteOrder,
  pendingOrders,
  billedOrders,
  canceledOrders,
} = require("../controllers/order");

router.post("/neworder", registerOrder);
router.put("/modifyorder", editOrder);
router.get("/orders", getOrders);
router.get("/deleteorder", deleteOrder);

router.get("/pendingorders", pendingOrders);
router.get("/billedorders", billedOrders);
router.get("/canceledorders", canceledOrders);

module.exports = router;
