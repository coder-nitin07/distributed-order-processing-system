const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "API Gateway", status: "OK" });
});

app.post("/orders", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/orders",
      req.body
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Order service unavailable" });
  }
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});