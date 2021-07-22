const eqObjects = function(object1, object2) {
  let equal = true;
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      equal = false;
    }
  }
  for (let key in object2) {
    if (object2[key] !== object1[key]) {
      equal = false;
    }
  }
  return equal;
};

const assertObjectsEqual = function(actual, expected) { 
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.log(`Example label: ${inspect(actual)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
    console.log(`Example label: ${inspect(actual)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false);