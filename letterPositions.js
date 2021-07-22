const letterPositions = function(sentence) {
  const letters = sentence.split(" ").join("");
  const results = {}
  for (let i = 0; i < letters.length; i++) {
    if (results[letters[i]]) {
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  return results;
};

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

// TEST CODE
eqArrays(letterPositions("hello").h, [0], true);
eqArrays(letterPositions("hello").e, [1], true);
eqArrays(letterPositions("hello").l, [ 2, 3 ], true);
eqArrays(letterPositions("hello").o, [ 4 ], true);
//console.log(letterPositions("hello"));