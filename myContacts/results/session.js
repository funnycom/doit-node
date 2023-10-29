const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express();
app.use(cookieParser());

app.use(
  session({
    // name: "connect.sid", // default는 connect.sid
    secret: "secret code",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_CONNECT }),
    cookie: { MaxAge: 60 * 60 * 24 * 1000 },
  })
);

app.get("/", (req, res) => {
  if (req.session.count) {
    req.session.count++;
    res.write("<p>count: " + req.session.count + "</p>");
    res.end();
  } else {
    req.session.count = 1;
    res.send("첫 번째 방문입니다.");
  }
});
app.get("/session", (req, res) => {
  console.log(req.session);
});
app.get("/delete-session", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.clearCookie("connect.sid");
      res.send("세션 삭제");
    }
  });
});

app.listen(5000, () => {
  console.log("서버 실행 중");
});
