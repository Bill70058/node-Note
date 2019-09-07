/** 数据库 - 查
 * 
 */

var mysql = require('mysql');
var http = require('http');

http.createServer(function(req, res){
    var pool = mysql.createPool({'host':'localhost','user':'root','password':'123456' ,'database':'20190605'}); 
    pool.getConnection(function(err, connection){
        if(err) {
            console.log('连接失败'+err);
        }else {
    
            connection.query('SELECT * FROM `user`;', function(err, data){
                if(err) {
                    console.log(err);
                }else {
                    // console.log(data);
                    res.write(JSON.stringify(data));
                    res.end();
                    connection.end();
                }
            })
        }
    })
}).listen(1234);

