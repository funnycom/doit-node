const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile("./myfile.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("myfile.txt is saved!");
  });
});