// async ... awiat 연습하기

const fs = require("fs").promises;

async function readDirAsync() {
  try {
    const files = await fs.readdir("./");
    console.log(files);
  } catch {
    console.error(err);
  }
}

readDirAsync();
