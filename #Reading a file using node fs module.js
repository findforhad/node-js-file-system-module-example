const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('acme.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/js'});
    res.write(data);
    res.end();
  });
}).listen(8080);