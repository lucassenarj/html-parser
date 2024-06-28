/**
 * Main test runner.
 */

const { Parser } = require('../Parser');

const parser = new Parser();

const program = `
  /**
   * Documentation comment:
   */
  "hello"
`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));