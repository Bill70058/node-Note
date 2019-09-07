/** 数据库查询
 * 1、链接数据库
 * 2、获取链接，连接可能失败
 */
var mysql = require('mysql');
// console.log(mysql);

//这是后端链接数据库的线
//                          数据库地址：本地    用户名：root    密码：123456    数据库名：20190603    -port（端口）：可以改
var pool = mysql.createPool({'host':'localhost','user':'root','password':'123456' ,'database':'20190605'}); 
// console.log(pool);

// pool.connect();

//异步链接数据库
//获取链接，可能失败，在connection.query 中写sql 语句
pool.getConnection(function(err, connection){
    if(err) {
        console.log('连接失败'+err);
    }else {
        //                关键字    关键字  表名     处理方法
        connection.query('SELECT * FROM `user`;', function(err, data){
            if(err) {
                console.log(err);
            }else {
                console.log(data);
                connection.end();
            }
        })
    }
})