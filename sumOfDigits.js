// write a function that takes a number as input and returns the sum of its digits

const sumOfDigits = (num) => {
  num = Array.from(String(num));

  const result = num.reduce((accum, currItem) => {
    let num = Number(currItem);
    accum += num;
    return accum;
  }, 0);

  return result;
};

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));
