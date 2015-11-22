var static = require('node-static');
var http = require('http');
var port = process.env.PORT || 1337;
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);