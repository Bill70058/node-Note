/** 数据库查询
 * 1、链接数据库
 * 2、获取链接，连接可能失败
 */
var mysql = require('mysql');
var pool = mysql.createPool({'host':'localhost','user':'root','password':'123456' ,'database':'20190605'}); 

pool.getConnection(function(err, connection){
    if(err) {
        console.log('连接失败'+err);
    }else {

        connection.query('INSERT INTO `user` (`ID`,`user`,`password`) VALUES("3","bill4","123");', function(err, data){
            if(err) {
                console.log(err);
            }else {
                console.log(data);
                connection.end();
            }
        })
    }
})