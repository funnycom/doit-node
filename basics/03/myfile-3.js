const fs = require("fs");

if (!fs.existsSync("./mytfile.txt")) {
  console.log("file does not exist");
} else {
  fs.unlink("./myfile.txt", () => {
    console.log("file deleted");
  });
}
