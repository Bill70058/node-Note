var http = require('http');
var querystring = require('querystring');
http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    var str = '';
    req.on('data', function(data){
        str += data;
    });
    req.on('end', function() {
        console.log(str);    // => user=bill&pass=123456

        var json = querystring.parse(str);
        if(json.user == 'bill' && json.pass == '123456') {
            console.log('success');
        }else {
            console.log('defeated');
        }
        res.end();
    })
}).listen(9217);