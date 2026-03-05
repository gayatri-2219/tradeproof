const express = require("express");
const cors = require("cors");
const tradeRoutes = require("./routes/tradeRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api", tradeRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`TradeProof backend running on port ${PORT}`);
});
