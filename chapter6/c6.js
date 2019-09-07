/**
 * 依赖：无依赖文件
 * 作用：cookies的加密运用
 * 作者：bill
 */
var express = require('express');
var static = require('express-static');
var cookieParser = require('cookie-parser');
var server = express();


server.listen('1234');

// 将签名添加到加密解析方法里
server.use(cookieParser('adsfg'));

server.use('', function(req, res, next) {

    // 加密首先要有个签名，也就是加密方式
    req.secret='adsfg';
    // 其次要在cookie里设置为有符号
    res.cookie('test', '123',{ signed:true});
    // 最后解析的时候要把签名添加到解析方法里并且用加密解析方法获取cookies
    // 只能获取加密了的，获取不了未加密的，未加密的要用未加密的方法去获取
    console.log(req.signedCookies);
    res.send('ok');
})