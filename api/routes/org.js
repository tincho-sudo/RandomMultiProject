const express = require("express");
const router = express();

const { getOrg } = require("../controllers/org");

router.get("/org", getOrg);

module.exports = router;
