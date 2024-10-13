// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.

let position = ["th", "st", "nd", "rd"];

const ordinal_Color_Choices = (array) => {
  array.forEach((element, index) => {
    if (index < 3) {
      let a = position.at(index + 1);
      let b = position.indexOf(a);
      let c = `${b}${a} choice is ${element}`;
      console.log(c);
    }
  });
};

const result = ordinal_Color_Choices([
  "Blue",
  "Green",
  "Red",
  "Orange",
  "Voilent",
  "Indigo",
  "Yellow",
]);
