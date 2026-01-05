const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "Order Service", status: "OK" });
});

app.post("/orders", (req, res) => {
  console.log("Order Service received order:", req.body);

  res.json({
    message: "Order created",
    order: req.body,
  });
});

app.listen(3001, () => {
  console.log("Order Service running on port 3001");
});