// write a function that takes an array of numbers as input and return the maximum numbers in the array

function findMax(arr) {
  //Math.max method to find the maximum number

  return Math.max(...arr);
}

console.log("result", findMax([1, 5, 3, 9, 2]));
console.log("result", findMax([-10, -5, -3, -9, -2]));
console.log("result", findMax([5]));
