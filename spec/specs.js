describe('triangleTracker', function() {
  it("is equilateral for most triangles where all sides are equal", function() {
    expect(triangleTracker(3,3,3)).to.equal("equilateral");
  });

  it("is isosceles for most triangles where two sides are equal", function() {
    expect(triangleTracker(3,2,2)).to.equal("isosceles");
  });
});
