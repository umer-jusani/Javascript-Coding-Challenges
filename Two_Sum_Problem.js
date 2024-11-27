function TwoSum(arr) {
  let indexnum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 50) {
        !indexnum.includes(i) ? indexnum.push(i) : null;
        !indexnum.includes(j) ? indexnum.push(j) : null;
      }
      break;
    }
  }

  return indexnum.join(", ");
}

const result = TwoSum([10, 20, 10, 40, 50, 60, 70]);
console.log("result", result);

// Function to find two indices in the array 'nums' whose elements sum to the 'target_num'
