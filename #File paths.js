const fs = require("fs");

fs.open("acme.js", "r", (err, fd) => {
  if (err) throw err;
  console.log("File has opened");
  fs.close(fd, err => {
    console.log("File is closing");
    if (err) throw err;
  });
});
