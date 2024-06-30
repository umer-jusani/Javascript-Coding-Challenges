//  write a function called countCharthat takes two parameter: a string and a characterto count. The function should return the number of times the specified character appears in the string.
// the function should return the count.

function countChar(word, character) {
  word = word.toLowerCase();
  character = character.toLowerCase();

  const a = word.split("").reduce((accum, currChar) => {
    if (currChar === character) {
      accum++;
    }

    return accum;
  }, 0);

  return a;
}

const result = countChar("MissIssippi", "f");
console.log("result", result);
