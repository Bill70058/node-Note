var express = require('express');
var static = require('express-static');
var fs = require('fs');
var Multer = require('multer');
var path = require('path');

var server = express();

server.listen(1234);

server.use(Multer({dest:'./save'}).any());
server.use('', function(req, res){
    fs.rename(req.files[0].path, req.files[0].path+path.parse(req.files[0].originalname).ext, function(err) {
        if(err){
            console.log(err);
        }else {
            console.log('上传完毕');
        }
    });
})