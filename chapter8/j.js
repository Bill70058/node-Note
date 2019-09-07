var jade = require('jade');
var str = jade.renderFile('./8.jade', {pretty: true, name:'bill',a:5,b:11, json:{width:'200px', height:'200px'}, arr:['a','b','c'],n:'<p>今天天气虽然不太好，但是我的颈部按摩仪好像快到了</p>'});
console.log(str);