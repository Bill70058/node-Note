var express = require('express');
var static = require('express-static');
var bodyParser = require('body-parser');
var Multer = require('multer');
var fs = require('fs');

var server = express();

server.listen(1234);

// server.use(bodyParser.urlencoded({}));
server.use(Multer().any());
server.post('', function(req, res) {
    // console.log(req.files);
    fs.writeFile('./save/1.png', req.files[0].buffer, function(err){
        if(err) {
            console.log(err);
        }else {
            console.log('ok');
        }
    })
})