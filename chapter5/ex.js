var express = require('express');
var server = express();
var bodyParser = require('body-parser');


server.listen(1234);


/**
 * http.createServer(function(req, res) {
 *  console.log('....');
 * }).listen(1234);
 */

 //-------------------------------------
 // -->> 两种不同的方式访问 
 /**
  * server.get('', function(req, res){
    console.log('有用get访问了');
});

server.post('', function(req, res) {
    console.log('有人用post了');
});
  */

  //------------------------------------------
  // -->> 通用访问方式use，不过这个打印方式只能打印 get 数据
  /** 
   *  server.use('', function(req, res){
    // console.log('有人访问了');
    console.log(req.query);
    
  });*/

//-------------------------------------------------
  // -->> 通过中间件传递数据
  /**
   *   server.use('', function(req, res, next) {
    //console.log('我是use1');
    req.num = 10;
    next();
  });
 server.use('', function(req, res) {
    // console.log('我是use2');
    console.log(req.num);
 });
   */

//---------------------------------------------------
// -->> 用于获取post方式传输的数据
server.use(bodyParser.urlencoded({}));


server.use(function(req, res, next) {
    console.log(req.body);
});