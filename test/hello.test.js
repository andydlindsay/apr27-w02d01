const obj = require('../hello');
const assert = require('assert').strict;

// test #1
assert.equal(obj.sayHello('Bob'), 'hello Bob');
// assert.equal(obj.sayHello('Carol'), 'hello Bob');
console.log(obj);
