// userMode.js의 사용자 모델을 참고하여 사용자 등록 API를 작성하세요.
// name과 email, password를 사용해서 사용자를 등록합니다.

const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./userModel");
const asyncHandler = require("express-async-handler");

const app = express();
app.use(express.json());

app.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).send("User registered");
  })
);

app.listen(3000, () => {
  console.log(`서버 실행 중`);
});
