const fs = require('fs');

fs.writeFile('acme.js', 'console.log("hello")', function (err) {
  if (err) throw err;
  console.log('New file acme.js is either created or if exists then updated');
});