const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

const port = 3000;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
