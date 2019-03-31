const fs = require("fs");

try {
  fs.unlinkSync("acme.js");
  console.log("File system operation successfully executed");
} catch (e) {
  console.log("Excecuted Catch block");
  console.log(e);
}
