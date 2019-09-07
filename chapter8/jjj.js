var jade = require('jade');
var str = jade.renderFile('./10.jade', {pretty: true});
console.log(str);