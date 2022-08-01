const express = require("express");

const app = express();

const startUp = require("./routes/index.js");

app.use(express.json());

startUp(app);

app.listen(3000, () => {
  console.log("Connected to Port 3000");
});

module.exports = app;
