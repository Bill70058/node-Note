var urlLib = require('url'),
http = require('http'),
querystring = require('querystring');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    //将前端传入的url属性的值解析为对象类型再用此对象内的user属性值和pass属性值进行判断
    var json = urlLib.parse(req.url, true).query;
    if(json.user == 'bill' && json.pass == '123456') {
        res.write('ok');
    }else {
        res.write('no ok');
    }

    res.end();
}).listen(9217);