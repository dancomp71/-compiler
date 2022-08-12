const { Parser } = require('../Parser.js');
const assert = require('assert');

/* list of tests */

const tests = [
    require('./literals-test.js')
];

const parser = new Parser();

function exec() {

    let program = `   42  `;
    let ast = parser.parse(program);
    console.log(JSON.stringify(ast, null, 2));

    program = `   
        // NUMBERS
    92
        /*hello
        ** wahtever
        */
    // "hello";

    `;
    ast = parser.parse(program);
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

    program = `'   5292  '`;
    ast = parser.parse(program);
    console.log(JSON.stringify(ast, null, 2));
}

function test(program, expected) {
    const ast = parser.parse(program);
    assert.deepEqual(ast, expected);
}

tests.forEach(testRun => testRun(test));

console.log('All assertions passed!');
