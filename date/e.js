// exports.sun = function(a,b,c) {
//     return a+b+c;
// };

module.exports={
    a: 10,
    b: 20,
    c: function(a,b,c) {
        return a+b+c;
    },
    d: function(data) {
        console.log(data);
    }
}