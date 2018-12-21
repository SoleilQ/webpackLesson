/**
 * webpack主运行流程
 * 1.Compiler(Tapable) -> Compilation(Tapable) -> Chunk -> 
 * 2.Mdoule -> runloaders -> Dependency(AST) -> Template
 */

//Chunk ->  Dependency -> Template
const fs = require("fs");
let input = "./src/index.js";
let output = './dist/main.js';
const ejs = require("ejs");
const getIntry = fs.readdirSync(input, "utf-8");