// all equal = Equalateral
// two equal = Isosales
// all different = Scalene

const triangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "Equalateral";
  } else if (a == b || b == c || c == a) {
    return "Isosales";
  } else {
    return "Scalene";
  }
};

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 4, 3));
console.log(triangleType(5, 8, 6));
