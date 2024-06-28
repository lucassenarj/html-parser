/**
 * Main test runner.
 */

const { Parser } = require('../Parser');

const parser = new Parser();

const program = `"Hello"`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));