const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const headers = req.headers;
  res.send(headers);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
