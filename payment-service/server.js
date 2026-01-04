const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "Payment Service", status: "OK" });
});

app.listen(3002, () => {
  console.log("Payment Service running on port 3002");
});