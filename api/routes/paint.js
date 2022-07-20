const express = require("express");
const router = express();

const {
  registerPaint,
  editPaint,
  getPaints
} = require("../controllers/paint");

router.post("/newpaint", registerPaint);
router.put("/modifypaint", editPaint);
router.get("/paints", getPaints);


module.exports = router;