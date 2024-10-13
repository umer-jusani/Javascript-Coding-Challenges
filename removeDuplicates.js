const removeDuplicates = (arr) => {
  let set = [...new Set(arr)];

  return set;
};

// Example Usage
console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([]));
