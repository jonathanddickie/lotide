const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

console.log(results1);

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

eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]);
eqArrays(results1, words.map(word => word[0]));