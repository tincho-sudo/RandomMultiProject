const { Router } = require("express");

const clientRoutes = require("../routes/client");
const orderRoutes = require("../routes/order");
const paintRoutes = require("../routes/paint");
const orgRoutes = require("../routes/org");

const router = Router();
router.use(clientRoutes);
router.use(paintRoutes);
router.use(orderRoutes);
router.use(orgRoutes);

module.exports = router;
