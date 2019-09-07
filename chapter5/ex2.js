var express = require('express');
var server = express();
var bodyParser = require('./bodypr');

server.listen(1234);
server.use(bodyParser.urlencoded());
server.use(function(req, res, next) {
    console.log(req.body);
    // -->> 这是 res.write() 与 res.end() 的结合强化版
    //如果单用这两个的话无法输出对象类型需要手动转，但是send() 方法会自动转
    res.send({a:10});
})