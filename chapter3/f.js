var http = require('http'),
fs = require('fs'),
urlLib = require('url');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    var json = urlLib.parse(req.url, true).query;
    //console.log(json);
    //console.log(json.titName);    => titName

    fs.readFile('./所有的文章.txt', 'utf8', function(err, data) {
        if(err) {
            console.log('err' + err);
        }else {
            function toString (data, need) {
                if(data.indexOf(need) != -1) {
                    data = data.replace(need, '"');
                    return toString(data, need);
                }else {
                    return data;
                }
            }
            var l = toString(data, '‘');
            var r = toString(l, '’');
            console.log(r);

            res.write(r);
            res.end();
            //console.log(data);
        }
    })


}).listen(9217);

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var json = urlLib.parse(req.url, true).query;
    //console.log(json.titName);
    fs.writeFile('./所有的文章/'+ json.titName + '.txt', json.inner, function(err) {
        if(err){
            console.log('err is: ' + err);
        } else {
            res.write('发布完成');
            res.end();


            fs.readFile('./所有的文章.txt', 'utf8', function(err, data) {
                if(err) {
                    console.log('err' + err);
                }else {
                    function toString (data, need) {
                        if(data.indexOf(need) != -1) {
                            data = data.replace(need, '"');
                            return toString(data, need);
                        }else {
                            return data;
                        }
                    }
                    var l = toString(data, '‘');
                    var r = toString(l, '’');
                    console.log(r);
                    
                    //创建一个数组将标题文件内的内容解析出来成为标题数组
                    var allArr = JSON.parse(r);
    
                    //将标题名字提交到标题数组内成为有新成员的标题数组
                    allArr.push(json.titName);
    
                    //将新的标题数组转换为字符串的形式传入标题文件
                    fs.writeFile('./所有的文章.txt', JSON.stringify(allArr), function(err) {
                        if(err) {
                            console.log('err is:' + err);
                        }else {
                            console.log('写入成功');
                        }
                    })
                   
                   // res.write(JSON.stringify(allArr));
                    //  res.write(r);
                    //  res.end();
                    //console.log(data);
                }
            })
        }
        



    })
}).listen(9218);