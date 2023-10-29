const express = require("express");
const app = express();

const port = 3000;

const requestTime = (req, res, next) => {
  let today = new Date();
  let now = today.toLocaleTimeString();
  req.requestTime = now;
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  const responseText = `Hello Node! \n 요청 시간 : ${req.requestTime}`;
  res.send(responseText);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
