var http = require('http');

//request是前台请求的东西，response是后台发送的东西
http.createServer(function(request, response){ 
    //跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    console.log('有人来访问了');
    
    //response.write('今天天气不错');
    //response.write('i am bill');
    // console.log(request.url);

    var url = request.url;
    //当url中找得到单词‘html’则打印
    if(url.indexOf('html') != -1){
        console.log(url);
        //如果找到url并且url是'index.html'则打印
        if(url == '/index.html'){
            response.write('您访问的页面是index.html');
        }else{
            response.write('404');
        }
    }else {

    }
    response.end();
}).listen(9217);