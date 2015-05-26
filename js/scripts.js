var triangleTracker = function(x,y,z) {

  if ((x + y <= z) || (x + z <= y) || (y + z <= x)) {
      return "not a valid triangle";
  }

  else if ((x === y) && (x != z) || (x === z) && (x != y) || (y === z) && (y != x)) {
      return "isosceles";
  }

  else if ((x !== y) && (y !== z)) {
      return "scalene";
  }

  else if ((x === y) && (y === z)) {
    return "equilateral";
  }
};
