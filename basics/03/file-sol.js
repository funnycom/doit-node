const fs = require("fs");

function writeData(filePath, data) {
  fs.writeFile(filePath, data, "utf8", (err) => {
    if (err) {
      console.log(`Error writing : ${err}`);
    } else {
      console.log('File written successfully.')
    }
  })
}

module.exports = writeData;