var urlLib = require('url');
var data = 'courseId=1004726027&share=1&shareId=1029349344#/learn/video?lessonId=1049715930&courseId=1004726027';

//解析url
console.log(urlLib.parse(data));

//解析url，并且将query属性的值转换为对象类型显示
console.log(urlLib.parse(data, true));

//解析url，单独显示query属性的值(转换为对象类型显示)
console.log(urlLib.parse(data).query);