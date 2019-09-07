/** 数据库 - 增
 * 
 */


var mysql = require('mysql');
var http = require('http');
var pool = mysql.createPool({'host':'localhost','user':'root','password':'123456' ,'database':'20190605'}); 

pool.getConnection(function(err, connection){
    if(err) {
        console.log('连接失败'+err);
    }else {

        connection.query('INSERT INTO `user` (`ID`,`user`,`password`) VALUES("3","纪泽鹏","123");', function(err, data){
            if(err) {
                console.log(err);
            }else {
                // console.log(data);
                // res.write(JSON.stringify(data));
                // res.end();
                connection.end();
            }
        })
    }
})

