// challenge: Calculate the Average

// Accept an array of numbers as input
// Calculate the sum of all the numbers in the array.
// Divide the sum by  the total number of elements in the array to find the average.
// Return the average as the result.

const calculateAverage = (array) => {
  let number = array.reduce((accumulator, currentValue) => {
    accumulator += currentValue;

    return accumulator;
  }, 0);

  return number / array.length;
};

console.log(calculateAverage([5, 10, 2, 8]));
