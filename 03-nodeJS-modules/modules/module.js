'use strict'
console.log("this line from module");

//? single function
// const testFunction = function(){
//     console.log("this is a function");
// }
// module.exports = testFunction

module.exports = function(){
    console.log("this is a function");
}  // this only works with one single function

//? multi function

// const testFunctionA = function(){
//     console.log("this is a function A");
// }
// const testFunctionB = function(){
//     console.log("this is a function B");
// }
// const testFunctionC = function(){
//     console.log("this is a function C");
// }

//thinking of something iterable
//* array
// module.exports = [
//     testFunctionA,
//     testFunctionB,
//     testFunctionC
// ]

//* object
// module.exports = {
//     testFunctionA: testFunctionA,
//     testFunctionB: testFunctionB,
//     testFunctionC: testFunctionC,
//     pi: 3.14
// }

// module.exports = {
//     testFunctionA,
//     testFunctionB,
//     testFunctionC,
//     pi: 3.14
// }

module.exports.testFunctionA = function(){
    console.log("this is a function A");
}
module.exports.testFunctionB = function(){
    console.log("this is a function B");
}
module.exports.testFunctionC = function(){
    console.log("this is a function C");
}
module.exports.pi = 3.14

