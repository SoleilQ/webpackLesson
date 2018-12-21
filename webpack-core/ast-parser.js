//1.soureType module(不用严格模式 import)、srcipt(严格模式)
//2.loactions 记录源代码的行数 
const acorn = require('acorn');
// const result = acorn.parse("1+1", {
//     //参数
// });

// console.log(result);

//ast
const walk = require("acorn-walk");

walk.simple(acorn.parse("let x = 10"), {
    Literal(node) {
        console.log(`Found a literal: ${node.value}`)
    }
});