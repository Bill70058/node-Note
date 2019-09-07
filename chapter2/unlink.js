var fs = require('fs');
fs.unlink('aaa.txt',function(err) {
    if(err)console.log('删除错误');
    console.log('删除成功');
});