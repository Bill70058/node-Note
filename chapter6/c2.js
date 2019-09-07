/**
 * 依赖文件：localhost:1234
 * 作用：后台传输cookie数据再从前台获取演示
 * 作者：bill
 */
var express = require('express');
var server = express();

// -->> 将前台的cookie数据取出到后台并且转换成json对象格式
var cookieParser = require('cookie-parser');

server.listen(1234);

server.use(cookieParser());
server.use('', function(req, res) {
    res.cookie('pass', '123456', {maxAge: 365*24*3600*1000});
    console.log(req.cookies);
    res.send('ok');
})