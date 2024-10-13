// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.

const printNestedArray = (array) => {
  array.forEach((ele, index) => {
    console.log(`=> Row ${index}`);

    ele.forEach((ele) => {
      console.log(ele);
    });
  });
};

const result = printNestedArray([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
]);
