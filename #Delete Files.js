const fs = require("fs");

fs.unlink("paradox.js", function(err) {
  if (err) throw err;
  console.log("File deleted!");
});
