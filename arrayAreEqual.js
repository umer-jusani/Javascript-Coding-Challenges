const arraysAreEquals = (arr1, arr2) => {
  // Checking Length
  let isLengthEqual = arr1.length == arr2.length;

  if (isLengthEqual) {
    const isSame = arr1.every((ele, index) => {
      return ele == arr2.at(index);
    });

    return isSame;
  } else {
    return false;
  }
};

console.log(arraysAreEquals([1, 2, 3], [1, 2, 3]), "answer");
console.log(arraysAreEquals([1, 2, 3], [1, 2, 4]), "answer");
console.log(arraysAreEquals([], []), "answer");
