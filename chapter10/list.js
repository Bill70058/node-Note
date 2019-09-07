var express = require('express');
var jade = require('jade');
var listRouter = express.Router();
var server = express();

server.listen(1234);
server.use('/list', listRouter);

var arr = [
    '【独家特稿】一纸书信连两地',
    '筑牢信仰之基 补足精神之钙 把稳思想之舵',
    '《关于中美经贸磋商的中方立场》白皮书  全文',
    '磋商严重受挫责任完全在美方 指责中国是无稽之谈',
    '中美经贸摩擦背后的历史之思、未来之问',
    '【独家特稿】一纸书信连两地-2',
    '筑牢信仰之基 补足精神之钙 把稳思想之舵-2',
    '《关于中美经贸磋商的中方立场》白皮书  全文-2',
    '磋商严重受挫责任完全在美方 指责中国是无稽之谈-2',
    '中美经贸摩擦背后的历史之思、未来之问-2',
    '【独家特稿】一纸书信连两地-3',
    '筑牢信仰之基 补足精神之钙 把稳思想之舵-3',
    '《关于中美经贸磋商的中方立场》白皮书  全文-3',
    '磋商严重受挫责任完全在美方 指责中国是无稽之谈-3',
    '中美经贸摩擦背后的历史之思、未来之问-3',
]

listRouter.use('/', function(req, res) {
    // console.log(req.query);
    var maxLi = Math.ceil(arr.length/4);
    var needArr = arr.slice(((req.query.page-1)*4),req.query.page*4);
    var str = jade.renderFile('./1.jade', {pretty:true, listArr:needArr,maxl:maxLi});
    console.log(str);
});

