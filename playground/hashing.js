const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
var data = {
    id:10
};
var token = jwt.sign(data,'posh76');
console.log(token);
var decoded = jwt.verify(token,'posh76');
console.log(decoded);

// var message = 'I am number 73';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


//example for hashing

// var data = {
//     id:4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecrete').toString()
// };
// data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecrete').toString();

// if(resultHash == token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data wrong');
// }