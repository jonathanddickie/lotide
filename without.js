const without = function(source, itemsToRemove) {
  let resultArray = source;
  for (i = 0; i <= itemsToRemove.length; i++) {
    for (j = 0; j <= resultArray.length; j++) {
      if (resultArray[j] === itemsToRemove[i]) {
        resultArray.splice(j, 1);
      }
    }
  }
  console.log(resultArray);
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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
eqArrays(words, ["hello", "world", "lighthouse"]);