const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArray.push(array[i]);  
    } else {
      return newArray;
    }
  }
    return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// EXPECTED OUTPUT

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const eqArrays = function(array1, array2) {
  let equal = true;
  if (array1.length !== array2.length) {
    equal = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    }
  }
  if (equal === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
  }
};

eqArrays(results1, [ 1, 2, 5, 7, 2 ]);
eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);