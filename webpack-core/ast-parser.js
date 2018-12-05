//1.soureType module(不用严格模式 import)、srcipt(严格模式)
//2.loactions 记录源代码的行数 
const acorn = require('acorn');
console.log(acorn.parse("1+1"));