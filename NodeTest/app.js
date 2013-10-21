
var port = process.env.PORT || 30025;
var http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('It works!\n');
}).listen(port);

console.log('Server running on: ' + port);

