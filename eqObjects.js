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

const eqObjects = function(object1, object2) {
  let match = true;
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      match = false;
    }
  }
  for (let key in object2) {
    if (object2[key] !== object1[key]) {
      match = false;
    }
  }
  return match;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqArrays(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqArrays(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqArrays(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2), false);