// Note
// If the Input is empty or contain only whitespaces, the function should return false.

// One Way
const LongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let word = str.split(" ");
  console.log("Array", word);
  // let b = word.sort((a, b) => a.length - b.length); // chote se bara

  return word.reduce(
    (accum, curr) => (curr.length > accum.length ? curr : accum),
    ""
  );
};

const result = LongestWord("uziar jusani is a digital marketer codeWithHarry");
console.log("OneWay", result);
