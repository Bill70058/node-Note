var http = require('http'),
urlLib = require('url');

//临时数据库
var allDate = {};
http.createServer(function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;
    console.log(json);
    
    //判断用户是否已注册
    if(allDate[json.user]) {
        res.write('用户名已注册');
    }else {
        allDate[json.user] = json.pass;
        res.write('恭喜注册成功');
    }

    res.end();

    
    console.log(allDate);
    

   
}).listen(9217);

http.createServer(function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;
    
    //判断数据库密码与用户输入密码是否一致
    if(allDate[json.user] == json.pass){
        res.write('登录成功');
    }else {
        res.write('用户名或密码错误');
    };
    res.end
}).listen(9218);