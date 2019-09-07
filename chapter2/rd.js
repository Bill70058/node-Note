var http = require('http'),
fs = require('fs');

fs.readFile('./1.txt', 'utf8', function(err, data) {
    if(err) {
        console.log('err is: ' + err);
    }else {
        // console.log(typeof data); // => string类型
         var json = eval("("+data+")");
       // console.log(json);
        var json = eval('('+data+')');
       json.a = 30;
       //console.log(json);

       //对象类型转字符串类型要用JSON.stringify() 方法才能转， 其他方法转不了
       fs.writeFile('save.txt', JSON.stringify(json), function(err, data) {
           if(err) {
               console.log(err);
           }else {
               console.log('保存完成');
           }
       })
    }
    
});

fs.unlink('aaa.txt', function(err) {
    if(err) console.log(err);
    console.log('删除完成');
})