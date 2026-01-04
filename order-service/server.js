const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "Order Service", status: "OK" });
});

app.listen(3001, () => {
  console.log("Order Service running on port 3001");
});