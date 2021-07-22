const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, title) {
  for (let key in object) {
    if (object[key] === title) {
      return key;
    }
  }
}

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

eqArrays(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
eqArrays(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);