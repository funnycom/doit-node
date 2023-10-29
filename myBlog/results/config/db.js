const mongoose = require("mongoose");
const asynchandler = require("express-async-handler");
require("dotenv").config(); // .env 파일 사용하기 위해

const connectDb = asynchandler(async () => {
  const connect = await mongoose.connect(process.env.MONGODB_URI); // .env 파일에 MONGODB_URI 변수에 DB 주소를 넣어둠
  console.log(`DB connectd: ${connect.connection.host}`); // DB 연결 성공시 콘솔에 출력
});

module.exports = connectDb;
