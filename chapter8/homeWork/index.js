var express = require('express');
var static = require('express-static');
var jade = require('jade');

var server = express();

server.listen(1234);

server.use('', function(req, res) {
    // console.log(req.path.substring(1)); =>url获取的搜索字符串
    var allName = req.path.substring(1);
    var url = '../mp3/'+allName;
    var str = jade.renderFile('./jade/index.jade', {pretty:true, mp3Name:allName, titleName:allName, mp3Url:url+'.mp3',srcUrl:url+'.jpg'});
    res.send(str);
})

server.use(static('./mp3/'))