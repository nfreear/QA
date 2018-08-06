/*!
  A demo test.

  https://mochajs.org/#getting-started
*/

/* global describe, it */

const assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([ 1, 2, 3 ].indexOf(4), -1);
    });
  });
});

/*
const HELLO = 'hello world!';

((message) => {
  console.log(message);
})(HELLO);
*/
