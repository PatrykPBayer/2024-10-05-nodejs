const express = require("express");
const app = express();
const port = 4000;

app.get("/data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({ message: "Hello from Express.js" });
});

app.post("/data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(201).send("New resource created");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
