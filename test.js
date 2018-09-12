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

  it('should calculate the simple moving average for an array of integers', function() {
    assert.deepEqual(sma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), [2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should calculate the simple moving average for an array of decimals', function() {
    var expected = ['2.20', '3.30', '4.40', '5.50', '6.60', '7.70', '8.80', '9.60'];
    assert.deepEqual(sma([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.10], 3), expected);
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
