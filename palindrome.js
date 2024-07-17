// write a function to determine whether a given string is a palindrome or not. a palindrome is a word, phrase, number, or other sequences of character that reads the same forward and backward, ignoring spaces, punctuation, and capatilization.

const isPlaindrome = (str) => {
  //   Convert to lower case and remove non-alphanumeric characters
  str = str.toLowerCase().replace("/[^a-z0-9]/g", "");

  // Check if the string is equal to its reverse
  let reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
};

console.log(isPlaindrome("A man, a plan, a canal, panama")); // true
console.log(isPlaindrome("racecar")); // true
console.log(isPlaindrome("hello")); // false
