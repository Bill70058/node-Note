var express = require('express');
var static = require('express-static');
var fs = require('fs');

var server = express();

server.listen(1234);

server.use('/jjj', function(req, res, next) {
    fs.readFile('./'+req.path, function(err, data) {
        if(err) {
            next();
        }else {
            res.write(data);
            res.end();
        }
    })
});

//利用'/*'可以在所有url路径下访问404，不在 jjj 路径下也可以
server.use('/*', function(req, res) {
    fs.readFile('./404.html', function(err, data) {
        res.write(data);
        res.end();
    })
})