describe('triangleTracker', function() {
  it("is equilateral for most triangles where all sides are equal", function() {
    expect(triangleTracker(3,3,3)).to.equal("equilateral");
  });

  it("is isosceles for most triangles where two sides are equal", function() {
    expect(triangleTracker(10,11,10)).to.equal("isosceles");
  });

  it("is scalene for most triangles where no sides are equal", function() {
    expect(triangleTracker(10,11,12)).to.equal("scalene");
  });

  it("is not a valid triangle if one side is the same or shorter than the other two combined", function() {
    expect(triangleTracker(2, 2, 8)).to.equal("not a valid triangle");
  });
});
