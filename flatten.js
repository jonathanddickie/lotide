const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      let tmp = array[i];
      newArray = newArray.concat(tmp);
    } else {
      newArray = newArray.concat(array[i]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));