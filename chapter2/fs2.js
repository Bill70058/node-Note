var fs = require('fs');

fs.readFile('./1.png', function(err,data){
    if(err)console.log(err);
    
    fs.writeFile('3.txt', data, function(err){
        if(err) console.log(err);
    })
})