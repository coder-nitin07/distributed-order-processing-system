const { Worker } = require("bullmq");
const IORedis = require("ioredis");
const axios = require("axios");

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

const worker = new Worker(
  "payment-queue",
  async (job) => {
    console.log("Processing payment job:", job.data);

    const { orderId, amount } = job.data;

    await axios.post("http://localhost:4002/payments", {
      orderId,
      amount,
    });

    console.log("Payment processed for order:", orderId);
  },
  { connection }
);

console.log("Payment worker running...");