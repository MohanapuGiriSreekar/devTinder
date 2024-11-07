const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hi from server");
});

app.listen(3000, () => {
  console.log("server is running successfully");
});
