// write a function that takes the non integar number and return its factorial

const factorialFinder = (number) => {
  number = Number(number);
  let multiply = 1;

  for (let i = number; i >= 1; i--) {
    multiply *= i;
  }

  return multiply;
};

console.log(factorialFinder("5"));
console.log(factorialFinder("0"));
console.log(factorialFinder("3"));
