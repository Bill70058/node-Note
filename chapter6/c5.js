/**
 * 依赖文件：无依赖文件
 * 作用：cookie的删除演示
 * 作者：bill
 */

var express = require('express');
var static = require('express-static');
var cookieParser = require('cookie-parser');
var server = express();


server.listen(1234);
 
server.use(cookieParser());
server.use('', function(req, res, next) {
   //res.cookie('user', 'bill', {maxAge: 365*24*3600*1000});
    ////res.cookie('password', '123456', {maxAge: 365*24*3600*1000});
    // res.cookie('test', '11111', {maxAge: 365*24*3600*1000});
   res.clearCookie('test');
   res.send('ok');
});




