var express = require('express');
var static = require('express-static');
var Multer = require('multer');
var fs = require('fs');

var server = express();

server.listen(1234);

server.use(Multer({dest:'./save'}).any());
server.post('', function(req, res) {
    console.log(req.files[0].originalname);
    res.send('ok');
})