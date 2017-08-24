// var connect = require('connect');
// var serveStatic = require('serve-static');
// var port = process.env.port||3000;
// connect().use(serveStatic(__dirname)).listen(port, function(){
//     console.log('Server running on 8080...');
// });
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);