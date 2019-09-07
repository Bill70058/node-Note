/**
 * 依赖文件：localhost:1234/1.html
 * 作用：next() 方法的演示，next() 方法运用中间件传输数据
 */
var express = require('express');
var static = require('express-static');
var cookieParser = require('cookie-parser');
var server = express();

 
server.listen(1234);
server.use(cookieParser());
server.use('', function(req, res, next) {
    //  res.send('ok');
    res.cookie('user', 'bill', {maxAge: 365*24*3600*1000});
    res.cookie('password', '123456', {maxAge: 365*24*3600*1000});
   // console.log(req.cookies);
    next();  
});

server.use('/home', function(req, res) {
    // console.log(req.cookies);
    // res.send({
    //     user: '11111',
    // });
});

server.use(static('./www'));

