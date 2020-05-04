const obj = require('../hello');
// const assert = require('assert').strict;
const assert = require('chai').assert;

describe('sayHello function tests', () => {

  it('returns "hello Bob" given the argument "Bob"', () => {
    assert.equal(obj.sayHello('Bob'), 'hello Bob');
  });

});
