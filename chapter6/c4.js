/**
 * 依赖文件：localhost:1234/1.html
 * 作用：自动登录演示
 * 作者：bill
 */
var express = require('express');
var static = require('express-static');
var cookieParser = require('cookie-parser');
var server = express();

 var vip = {
    'bill':'123456',
 };
server.listen(1234);
 
server.use(cookieParser());
server.use('', function(req, res, next) {
    res.cookie('user', 'bill', {maxAge: 365*24*3600*1000});
    res.cookie('password', '123456', {maxAge: 365*24*3600*1000});
    // res.cookie('test', '11111', {maxAge: 365*24*3600*1000});
    // res.send(req.cookies);
    next();
});

server.use('/home', function(req, res) {
    console.log(req.cookies.user, req.cookies.password);
    res.send({
        user: req.cookies.user,
        pass: req.cookies.password,
    })
});

server.use('/login', function(req, res, next) {
    console.log('req.query is: '+req.query.user);
    if(vip[req.query.user] == vip.bill) {
        res.send('ok');
    }else {
        res.send('no ok');
    }
})

server.use(static('./www'));