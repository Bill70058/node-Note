var http = require('http');
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    // console.log(req.url);

    //直接打印url的话会显示有/？，利用substring去除。
    var url = req.url.substring(2);
    //user=bill&pass=123456
    //['user=bill','pass=123456']
    //{user:bill,pass:123456}
    //以上的推演需要用到split进行分割,利用split分割将会返回分割成两半的两个数组
    var arr = url.split('&');// => ['user=bill','pass=123456']


    var json = {};
    for(var i = 0; i < arr.length; i++) {                                           //中括号访问法，中括号相当于‘.‘
        json[arr[i].split('=')[0]] = arr[i].split('=')[1];// => json[user] = bill; json[pass] = 123456; => json.user=bill; json.pass=123456 =>{user:bill, pass=123456}
    }
    //console.log(json);

    if(json.user=='bill' && json.pass=='123456') {
        res.write('登陆成功');
    }else {
        res.write('登陆失败');
    }

    //console.log(url);
    res.write('访问成功');
    res.end();
}).listen(9217);