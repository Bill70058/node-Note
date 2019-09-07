var querystring = require('querystring');
var data = 'courseId=1004726027&share=1&shareId=1029349344#/learn/video?lessonId=1049715930&courseId=1004726027';

console.log(querystring.parse(data));
