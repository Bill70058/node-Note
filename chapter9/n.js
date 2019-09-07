var express = require('express');
var static = require('express-static');
var fs = require('fs');
var server = express();

server.listen(1234);

server.use('/jjj', function(req, res) {
    fs.readFile('./'+req.path, function(err,data) {
        if(err){
            fs.readFile('./404.html', function(err, data) {
                res.write(data);
                res.end();
            })
        }else {
            res.write(data);
            res.end();
        }
    });
});