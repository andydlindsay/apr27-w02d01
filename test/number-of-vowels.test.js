const assert = require('chai').assert;
const numberOfVowels = require('../number-of-vowels.js');

describe('numberOfVowels function tests', () => {

  it('returns 3 given "orange"', () => {
    const actual = numberOfVowels('orange');
    const expected = 3;
    assert.equal(actual, expected);
  });

  it('returns 5 given "lighthouse labs"', () => {
    const actual = numberOfVowels('lighthouse labs');
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('returns 5 given "aeiou"', () => {
    const actual = numberOfVowels('aeiou');
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('returns 0 given empty string', () => {
    const actual = numberOfVowels('');
    const expected = 0;
    assert.equal(actual, expected);
  });

  it('returns 0 given "bcdf"', () => {
    const actual = numberOfVowels('bcdf');
    const expected = 0;
    assert.equal(actual, expected);
  });

});
