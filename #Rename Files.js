const fs = require("fs");

fs.rename("acme.js", "paradox.js", function(err) {
  if (err) throw err;
  console.log("File Renamed!");
});
