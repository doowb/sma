'use strict';

require('mocha');
var assert = require('assert');
var sma = require('./');

describe('sma', function() {
  it('should export a function', function() {
    assert.equal(typeof sma, 'function');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      sma();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be an array');
      cb();
    }
  });

  it('should calculate the simple moving average for an array of elements', function() {
    assert.deepEqual(sma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), [2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should calculate the average for an entire array when range is not passed.', function() {
    assert.deepEqual(sma([1, 2, 3]), [2]);
  });

  it('should use a custom format function', function() {
    var format = function(n) {
      return n.toFixed(5);
    };
    var expected = ['2.50000', '3.50000', '4.50000', '5.50000', '6.50000', '7.50000'];
    assert.deepEqual(sma([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, format), expected);
  });
});
