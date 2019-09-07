var http = require('http');

//request是前台请求的东西，response是后台发送的东西
http.createServer(function(request, response){ 
    console.log(request);

}).listen(9217);