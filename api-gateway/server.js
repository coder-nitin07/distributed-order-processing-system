const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ service: "API Gateway", status: "OK" });
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});