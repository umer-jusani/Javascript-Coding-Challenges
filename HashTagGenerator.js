// the input string should be converted to a hashtag format, where each word is cpaatalized and concatination together without spaces
// If the length of a string is greater than 280 characters or if the innput string isempty or contain only whitespaces, the function should return false
// otherwise, the function should return the generated hashtag prefixed with #

const HastTagGenerator = (string) => {
  "";
  const Strlength = string.length;
  if (Strlength > 280 || !string || !string.trim()) {
    return false;
  }

  let arr = string.split(" ");

  const str = arr.map((currele) =>
    currele.replace(currele[0], currele[0].toUpperCase())
  );

  const hashTag = `#${str.join("")}`;

  return hashTag;
};

const result = HastTagGenerator("my father name is ferooz haroon"); // #MyNameIsMuhammadUmerJusani

console.log("result:", result);

