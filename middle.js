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

const middle = function(array) {
  let midArray = [];
  const midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      midArray.push(array[midIndex]);
    } else {
      midArray = [array[midIndex - 1], array[midIndex]];
    }
  }
  return midArray;
};

eqArrays(middle([1]) , []);
eqArrays(middle([1, 2]), []);
eqArrays(middle([1, 2, 3]), [2]);
eqArrays(middle([1, 2, 3, 4, 5]), [3]);
eqArrays(middle([1, 2, 3, 4]), [2, 3]);
eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);