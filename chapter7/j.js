var jade = require('jade');
// var str = jade.render('input'); // 解析标签
// var str = jade.renderFile('./1.jade');
var str = jade.renderFile('./2.jade', {pretty: true});  //美化

console.log(str);