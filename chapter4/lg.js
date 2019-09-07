var http = require('http'),
fs = require('fs'),
urlLib = require('url'),
querystring = require('querystring');

var vip = {
    bill: 123,
};

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;

    if(json.user == 'bill') {
        res.write('用户已注册');
        res.end();
        return;
    }

    //console.log(json.user, json.pass);
    fs.readFile('./账号密码.txt', 'utf8', function(err, data) {
        if(err) {
            console.log('err'+err);
        }else {
            //console.log(data);
            var jsonDate = eval('('+data+')');
            if(jsonDate[json.user]){
                res.write('用户名已存在');
                res.end();
            }else {
                jsonDate[json.user] = json.pass;
                fs.writeFile('./账号密码.txt', JSON.stringify(jsonDate), function(err) {
                    if(err) {
                        console.log(err);
                    }else {
                        res.write('恭喜，注册成功');
                        res.end();
                    }
                })
            }
        }
    })
}).listen(9217);


http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;

    if(json.user == 'bill' && json.pass=='123') {
        res.write('管理员登录成功');
        res.end();
        return;
    }

    fs.readFile('./账号密码.txt', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }else {
            var jsonDate = eval('('+data+')');
            console.log(jsonDate);
            console.log(json.user, json.pass);
            if(jsonDate[json.user] == json.pass) {
                res.write('登录成功!');
                res.end();
            }else {
                res.write('登录失败，用户名或密码错误');
                res.end();
            }
        }
    })
}).listen(9218);

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;

    fs.readFile('./文章列表.txt', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }else {
            var arrDate = eval('('+data+')');
            //console.log(arrDate);
            arrDate.push(json.fileName);
            fs.writeFile('./文章列表.txt', JSON.stringify(arrDate), function(err) {
                if(err) {
                    console.log(err);
                }else {
                    res.write('发布成功');
                    res.end();

                    fs.writeFile('./文章列表/'+json.fileName+'.txt', json.inner ,function(err) {
                        if(err){
                            console.log(err);
                        }
                    })
                }
            })
        }
    })
}).listen(9219);

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    fs.readFile('./文章列表.txt', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }else {
            res.write(data);
            res.end();
        }
    })

}).listen(9220);

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;

    fs.readFile('./文章列表/'+json.fileName+'.txt', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }else {
            res.write(data);
            res.end();
        }
    })

}).listen(9221);

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;

    fs.readFile('./账号密码.txt', 'utf8', function(err, data) {
        if(err){
            console.log(err);
        }else {
            var allDate = eval('('+data+')');
            var arr = [];
            //allDate.keys();
            for(var i in allDate) {
                arr.push(i);
            }
            //数组转字符串
            res.write(JSON.stringify(arr));
            res.end();
        }
    })
}).listen(9222);

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;

    fs.readFile('./账号密码.txt', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }else {
            var allDate = eval('('+data+')');

            //delete allDate.json.deleteName;
            delete allDate[json.deleteName];
            fs.writeFile('./账号密码.txt', JSON.stringify(allDate), function(err){
                console.log(err);
                res.write('删除成功');
                res.end();
            })
        }
    })
}).listen(9223);