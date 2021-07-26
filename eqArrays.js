const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(array1, array2) {
  let equal = true;
  if (array1.length !== array2.length) {
    return equal = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return equal = false;
    }
  }
  return equal;
};

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

module.exports = eqArrays;