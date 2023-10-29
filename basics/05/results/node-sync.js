// Node.js에서 동기 처리하기

const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files);

console.log("Code is done.");
