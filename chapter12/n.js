var express = require('express'),
jade = require('jade'),
allArr = require('./data');
// console.log(allArr);   
var server = express();

server.listen(1234);
var userRouter = express.Router();
var listRouter = express.Router();
var newsRouter = express.Router();

server.use('/user', userRouter);
server.use('/list', listRouter);
server.use('/news', newsRouter);


userRouter.use('', function(req,res,next) {
   
    if(req.query.page =='0' || !req.query.page){
       var needPage=0;
    }else {
       var needPage=req.query.page;
    }
    //1 3 -6
    //2 6-9
    //3 9-12
    //0 0-3
    var maxL = Math.ceil(allArr.user.length/3);
    var needArr = !req.query.page?allArr.user.slice(0,3):allArr.user.slice(req.query.page*3,req.query.page*3+3);
    // var needArr = allArr.user.slice(req.query.page*3,req.query.page*3+3);
    var str = jade.renderFile('./1.jade',{pretty:true,dataArr:needArr,maxL:maxL,linkNode:'user',needPage:needPage});
    res.send(str);
});
listRouter.use('', function(req,res,next) {
    if(req.query.page =='0' || !req.query.page){
        var needPage=0;
     }else {
        var needPage=req.query.page;
     }

    var maxL = Math.ceil(allArr.list.length/3);
    var needArr = !req.query.page?allArr.list.slice(0,3):allArr.list.slice(req.query.page*3,req.query.page*3+3);
    // var needArr = allArr.user.slice(req.query.page*3,req.query.page*3+3);
    var str = jade.renderFile('./1.jade',{pretty:true,dataArr:needArr,maxL:maxL,linkNode:'list',needPage:needPage});
    res.send(str);
});
newsRouter.use('', function(req,res,next) {
    var maxL = Math.ceil(allArr.news.length/3);
    var needArr = !req.query.page?allArr.news.slice(0,3):allArr.news.slice(req.query.page*3,req.query.page*3+3);
    // var needArr = allArr.user.slice(req.query.page*3,req.query.page*3+3);
    var str = jade.renderFile('./1.jade',{pretty:true,dataArr:needArr,maxL:maxL,linkNode:'news'});
    res.send(str);
});



server.use('', function(req, res) {
    var str = jade.renderFile('./1.jade', {pretty:true});
    res.send(str);
});