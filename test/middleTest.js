const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle');

assertArraysEqual(eqArrays(middle([1]) , []));
assertArraysEqual(eqArrays(middle([1, 2]), []));
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]));