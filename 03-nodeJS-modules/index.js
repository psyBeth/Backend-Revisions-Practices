'use strict'
/*
    NODE MODULES
*/

console.log("hello FS15");
// require('./modules/module.js')
require('./modules/module.js') // no need the js at the end
//looking for an index.js in the folder
require('./modules')

//? single function call
const testSingleFunction = require('./modules/module')
// testSingleFunction()


//? multi function call

//* array
// const [test1, test2, test3] = require('./modules/module')
// // test1(), test2(), test3()
// test1()
// test2()
// test3()

//* object
const {testFunctionA: test1, testFunctionB: test2, testFunctionC: test3, pi} = require('./modules/module')
// testFunctionA()
// testFunctionB()
// testFunctionC()
test1(), test2(), test3();
console.log(pi);

// require('http') //project folder firstly, ant then global
// require('node:http')
require('dotenv').config() //.env file content to process.env
console.log(process.env.PORT);
console.log(process.env.HOST);
console.log(process.env.SAMPLE_TEXT);