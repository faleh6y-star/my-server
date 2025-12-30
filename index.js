const express = require("express");
const app = express();

app.use(express.json());

let lastSignal = null;

// TradingView يرسل هنا
app.post("/webhook", (req, res) => {
  lastSignal = req.body;
  console.log("Signal received:", lastSignal);
  res.status(200).send("OK");
});

// التطبيق يطلب هنا
app.get("/signal", (req, res) => {
  res.json(lastSignal);
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
