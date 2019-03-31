const fs = require('fs');

fs.stat('acme.js', function (err, stats) {
  if (err) {
      return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");
  
  // Check file type
  console.log("isFile ? " + stats.isFile());
  console.log("isDirectory ? " + stats.isDirectory());    
});