//  write a function called countCharthat takes two parameter: a string and a characterto count. The function should return the number of times the specified character appears in the string.
// the function should return the count.

// function countChar(word, character) {
//   let a = word.toLowerCase();
//   let b = character.toLowerCase();
//   let obj = {};

//   for (let i = 0; i < a.length; i++) {
//     const containsValue = Object.keys(obj);

//     if (!containsValue.includes(a[i])) {
//       obj[a[i]] = 1;
//     } else {
//       obj[a[i]]++;
//     }
//   }

//   const count = obj[b] ? obj[b] : "This character does not exit in this word";

//   return count;
// };

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
