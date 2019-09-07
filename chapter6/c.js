
/**
 * 依赖文件: localhost:1234
 * 作用： 指定url访问路径演示，cookie生存时间运用演示(maxAge)
 * 作者：bill
 */
var express = require('express');
var server = express();
var static = require('express-static');

server.listen(1234);
// server.use('', function(req, res, next) {
//     res.cookie('user', '1234', {path: '/aaa'}, {maxAge: 1000});
//     res.send('ok');
// });
// server.use(static('./www'));

server.use('/aaa', function(req, res) {
    res.cookie('pass', '11111', {maxAge: 50000});
    res.send('ok');
})