var http = require('http');
var urlLib = require('url');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;
    console.log(json.user, json.pass);
}).listen(9217);