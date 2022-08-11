const { Parser } = require('../Parser.js');
const parser = new Parser();

let program = `42`;
let ast = parser.parse(program);
console.log(JSON.stringify(ast, null, 2));

program = `"hello"`;
ast = parser.parse(program);
console.log(JSON.stringify(ast, null, 2));

program = `"42"`;
ast = parser.parse(program);
console.log(JSON.stringify(ast, null, 2));

program = `'52'`;
ast = parser.parse(program);
console.log(JSON.stringify(ast, null, 2));
