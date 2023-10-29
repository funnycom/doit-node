const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.use(methodOverride("_method"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
