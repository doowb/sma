'use strict';

var sma = require('./');

// `size` of 4
console.log('sma([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);');
console.log(sma([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log();

// `size` default to the length of the list
console.log('sma([1, 2, 3, 4, 5]);');
console.log(sma([1, 2, 3, 4, 5]));
console.log();

// custom format function
console.log('sma([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, function(n) { return n.toFixed(5); });');
console.log(sma([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, function(n) { return n.toFixed(5); }));
console.log();

console.log('sma([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.10], 3);');
console.log(sma([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.10], 3));
console.log();
