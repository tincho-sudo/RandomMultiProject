const express = require("express");
const router = express();

const {
  registerOrder,
  editOrder,
  getOrders,
  getOrder,
  deleteOrder,
  pendingOrders,
  billedOrders,
  canceledOrders,
} = require("../controllers/order");

router.post("/neworder", registerOrder);
router.put("/modifyorder", editOrder);
router.get("/orders", getOrders);
router.get("/order/:id", getOrder);
router.delete("/deleteorder/:id", deleteOrder);

router.get("/pendingorders", pendingOrders);
router.get("/pendingorders/:id", pendingOrders);
router.get("/billedorders", billedOrders);
router.get("/billedorders/:id", billedOrders);
router.get("/canceledorders", canceledOrders);
router.get("/canceledorders/:id", canceledOrders);

module.exports = router;
