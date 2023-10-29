// Node.js에서 프로미스로 비동기 처리하기  

const fs = require("fs").promises;

fs.readdir("./")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
