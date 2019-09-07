var jade = require('jade');
var str = jade.renderFile('./9.jade', {pretty:true});
var fs = require('fs');
// console.log(str);

fs.writeFile('./jj.html', str, function(err) {
    if(err) {
        console.log(err);
    }else {
        console.log('写入完成');
    }
})