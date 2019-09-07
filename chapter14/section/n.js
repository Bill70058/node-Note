var mysql = require('mysql'),
express = require('express'),
static = require('express-static'),
jade = require('jade');

var server = express();

server.listen(1234);


server.use('/news',function(req, res){

    if(!req.query.uid){
        res.send('uid无法访问');
        return;
    }


    var Pool = mysql.createPool({
        'host':'localhost',
        'user':'root',
        'password':'123456',
        'database':'20190605'
    });
    Pool.getConnection(function(err,connection){
        if(err) {
            console.log('链接失败'+err);
        }else {
            connection.query('SELECT * FROM `a` WHERE ID="'+ req.query.uid +'"',function(err,data){
                if(err){
                    console.log('404'+err);
                    res.send('404');
                }else {
                    if(data.length>0){
                        var str = jade.renderFile('./2.jade',{pretty:true, arr:data});
                        res.send(str);
                    }else {
                        res.send('找不到');
                    }
                    connection.end();
                }
            });
        }  
    })
});


//读取列表接口，读取数据库内inner 内容
server.use('/list.html',function(req,res) {

    //?page=0
    //  0-3
    //?page=1
    //  3-6
    //?page=2
    //  6-9
    //?page=3
    //  9-12
    var pageNum;
    if(req.query.page == '0' || !req.query.page) {
        pageNum = 0;
    }else {
        pageNum=req.query.page;
    }
    console.log(req.query.page);
    var Pool = mysql.createPool({
        'host':'localhost',
        'user':'root',
        'password':'123456',
        'database':'20190605'
    });
    Pool.getConnection(function(err,connection){
        if(err) {
            console.log('链接失败'+err);
        }else {
            connection.query('SELECT ID,user,textName,time FROM `a`',function(err,data){
                if(err){
                    console.log('404'+err);
                    res.send('404');
                }else {
                    var needData = data.slice(pageNum*3,pageNum*3+3);
                    console.log(needData);

                    var str = jade.renderFile('./1.jade',{pretty:true, arr:needData,arr2:data});
                    res.send(str);
                    connection.end();
                }
            });
        }  
    })
});

//发布文章接口
server.use('/getText',function(req,res){
    //ID - user - textName - time - inner
    var Pool = mysql.createPool({
        'host':'localhost',
        'user':'root',
        'password':'123456',
        'database':'20190605'
    });
    Pool.getConnection(function(err,connection){
        if(err) {
            console.log('链接失败'+err);
        }else {
            connection.query('INSERT INTO `a` (`user`,`textName`,`time`,`inner`) VALUES("'+ req.query.user +'","'+ req.query.textName +'","'+ req.query.time +'","'+ req.query.inner +'");',function(err,data){
                if(err){
                    console.log('插入失败'+err);
                    res.send('发布失败');
                }else {
                    res.send('发布成功');
                    connection.end();
                }
            });
        }  
    })
})




server.use(static('./'));