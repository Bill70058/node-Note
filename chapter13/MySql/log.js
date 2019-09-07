var express = require('express');
var static = require('express-static');
var mysql = require('mysql');

var server = express();
server.listen(1234);




//登陆接口
server.use('/login',function(req,res){
    var Pool = mysql.createPool({
        'host':'localhost',
        'user':'root',
        'password':'123456',
        'database':'20190705',
    });
    Pool.getConnection(function(err,connection) {
        if(err){
            console.log('登陆失败'+err);
        }else {
            connection.query('SELECT user,pass FROM `test` WHERE user="'+ req.query.user +'" AND pass="'+ req.query.pass +'"',function(err,data) {
                if(err){
                    console.log('查找失败'+err);
                }else {
                    res.send('登陆成功');
                }
                connection.end();
            })
        }
    })
});



//注册接口
server.use('/res', function(req,res) {
    var Pool = mysql.createPool({
        'host':'localhost',
        'user':'root',
        'password':'123456',
        'database':'20190705',
    });

    Pool.getConnection(function(err,connection){
        if(err) {
            console.log('连接失败'+err);
        }else {
            connection.query('SELECT user FROM `test` WHERE user='+'"'+req.query.user+'"'+';',function(err,data) {
                if(err) {
                    console.log('注册失败'+err);
                }else {
                    if(data.length > 0) {
                        res.send('用户名已存在');
                    }else {
                        //找到了用户名但是没找到这个字段，插入用户输入的字段填补
                        connection.query('INSERT INTO `test` (`user`,`pass`) VALUES("'+ req.query.user +'","'+ req.query.pass +'");',function(err,data) {
                            if(err){
                                console.log('注册插入错误'+err);
                            }else {
                                connection.end();
                                res.send('注册成功了');
                            }
                        });
                        
                    }
                }
            });
        }
    })
})



server.use(static('./'));