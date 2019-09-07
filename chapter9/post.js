var express = require('express');
var static = require('express-static');
var bodyParser = require('body-parser');

var server = express();

server.listen(1234);

server.use(bodyParser.urlencoded({}));
server.post('', function(req, res) {
    console.log(req.body);
})