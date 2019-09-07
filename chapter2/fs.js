var fs = require('fs');

fs.writeFile('aaa.txt', '今天天气不错', function(err) {
    if(err) console.log('error is: '+ err);
    console.log('写入完毕，请查看');
})