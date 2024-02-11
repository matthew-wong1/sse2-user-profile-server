const express = require("express");
const cors = require("cors");

const IP_ADDRESS = '127.0.0.1';
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server listening on ${IP_ADDRESS}:${PORT}`);
});