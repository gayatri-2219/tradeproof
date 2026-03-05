const express = require("express");
const { submitTrade, verifyTrade, getTradeByHash } = require("../controllers/tradeController");

const router = express.Router();

router.post("/trade", submitTrade);
router.post("/verify", verifyTrade);
router.get("/trade/:hash", getTradeByHash);

module.exports = router;
