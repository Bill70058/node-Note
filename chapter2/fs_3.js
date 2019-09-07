var http = require('http'),
fs = require('fs'),
urlLib = require('url'),
querystring = require('querystring');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.url);
    fs.readFile('./index.html', function(err,data) {
        if(err) console.log(err);
        res.write(data);
        res.end();
    })
    
}).listen(9217); 