var triangleTracker = function(x,y,z) {
  if ((x === y) && (y === z)) {
    return "equilateral";
  } else {
    if ((x === y) && (x != z) || (x === z) && (x != y) || (y === z) && (y != x)) {
      return "isosceles";
  } else {
    if ((x != y) && (y != z)) {
      return "scalene";
  } else {
    return "This is not a triangle!"
  }
    }
  }
};
