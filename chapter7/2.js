var jade = require('jade');
var fs = require('fs');

var str = jade.renderFile('./1.jade', {pretty: true});

fs.writeFile('./bulid/1.html', str, function(err) {
    if(err) {
        console.log('err is: '+ err);
    }else {
        console.log('成功');
    }
})