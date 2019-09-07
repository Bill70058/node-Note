var express = require('express');
var static = require('express-static');
var server = express();

server.listen(1234);
server.use('/bill', function(req, res) {
    res.send('有人访问了');
});
server.use(static('./www'));