const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "Order Service", status: "OK" });
});

app.post("/orders", async (req, res) => {
  console.log("Order Service received order:", req.body);

  try {
    const paymentResponse = await axios.post(
      "http://localhost:3002/payments",
      {
        orderAmount: req.body.price,
        orderId: 'ORD_' + Date.now(),
      }
    );

    res.json({
      message: "Order created",
      payment: paymentResponse.data
    });
  } catch (err) {
    res.status(500).json({ error: 'Payment Failed' });
  }
});

app.listen(3001, () => {
  console.log("Order Service running on port 3001");
});