// sort this array without using the sort method

const sortAnArray = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let index = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        index++;
      }
    }
    newArr[index] = arr[i];
    index = 0;
  }

  return newArr;
};

const result = sortAnArray([5, 3, 1, 8]);
console.log("resut", result);
