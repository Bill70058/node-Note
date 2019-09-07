var fs = require('fs');

console.log('修改中，请稍后');
setTimeout(() => {
    fs.rename('bbbbb.txt', 'aaaaa.txt', function(err){
        if(err) {
            console.log('修改失败：'+err);
        }else {
            console.log('修改成功');
        }
    })
}, 2000);