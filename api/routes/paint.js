const express = require("express");
const router = express();

const {
  registerPaint,
  editPaint,
  getPaints,
  getPaint,
} = require("../controllers/paint");

router.post("/newpaint", registerPaint);
router.put("/modifypaint", editPaint);
router.get("/paints", getPaints);
router.get("/paint", getPaint);

module.exports = router;
