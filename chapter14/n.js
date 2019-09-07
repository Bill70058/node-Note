var express = require('express');
var Multer = require('multer');
var static = require('express-static');
var path = require('path');
var fs = require('fs');

var server = express();

server.listen(1234);
server.use(Multer({dest:'./'}).any());

server.use('/setFiles',function(req,res){
    // console.log(req.files);
    //                                                                        ext 是解析出来的文件后缀
    var newFileName = req.files[0].path+path.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newFileName,function(err){
        if(err) {
            console.log('改名错误'+err);
        }else {
            res.send(newFileName);
        }
    })
});

server.use(static('./'));