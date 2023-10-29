const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;

const logger = (req, res, next) => {
  console.log("User Logged");
  next();
};

// app.use(logger);

app.route("/").get((req, res) => {
  res.status(200).send("Hello Node!");
});

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
