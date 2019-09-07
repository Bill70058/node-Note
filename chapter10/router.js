var express = require('express');
// console.log(express);
var server = express();

server.listen(1234);
var userRouter = express.Router();
server.use('/user', userRouter);
userRouter.use('/leo', function(req, res) {
    res.send('hello router');
});
userRouter.use('/sky', function(req, res) {
    res.send('hello sky');
});