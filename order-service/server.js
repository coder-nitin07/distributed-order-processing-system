const express = require("express");
const app = express();
const axios = require("axios");
const paymentQueue = require("./queue");

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "Order Service", status: "OK" });
});

app.post("/orders", async (req, res) => {
  const { orderId, amount } = req.body;

  await paymentQueue.add("process-payment", {
    orderId,
    amount,
  });

  console.log("Order placed, payment queued");

    res.json({
      message: "Order placed successfully",
      status: "PAYMENT_PENDING",
    });
});

app.listen(3001, () => {
  console.log("Order Service running on port 3001");
});