const { Router } = require("express");
//const { builtinModules } = require("module");
//const { modelNames } = require("mongoose");

const clientRoutes = require("../routes/client");
const orderRoutes = require("../routes/order");
const paintRoutes = require("../routes/paint");

const router = Router();
router.use(clientRoutes);
router.use(paintRoutes);
router.use(orderRoutes);

module.exports = router;
