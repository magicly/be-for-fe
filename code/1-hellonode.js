const http = require("http");

const server = http.createServer(function(request, response) {
  response.end("Hello Node\n");
});

server.listen(7777);
console.log("Server running at http://127.0.0.1:7777/");
