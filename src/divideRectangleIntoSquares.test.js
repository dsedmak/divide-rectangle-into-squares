const divideRectangleIntoSquares = require("./divideRectangleIntoSquares.js");

test("throws an error if the parameter is the correct shape", () => {
    expect(() => divideRectangleIntoSquares().next()).toThrow();
    expect(() => divideRectangleIntoSquares(null).next()).toThrow();
    expect(() => divideRectangleIntoSquares(1).next()).toThrow();
    expect(() => divideRectangleIntoSquares("string").next()).toThrow();
    expect(() => divideRectangleIntoSquares(() => false).next()).toThrow();
    expect(() => divideRectangleIntoSquares({}).next()).toThrow();
    expect(() => divideRectangleIntoSquares({x:1}).next()).toThrow();
})

test("throws an error if the parameter properties are not integers", () => {
    expect(() => divideRectangleIntoSquares({ x: 0, y: 0, width: {x}, height: 19 }).next()).toThrow();
    expect(() => divideRectangleIntoSquares({ x: "1", y: 0, width: 17, height: 19 }).next()).toThrow();
    expect(() => divideRectangleIntoSquares({ x: 0, y: null, width: 17, height: 19 }).next()).toThrow();
    expect(() => divideRectangleIntoSquares({ x: 0, y: 0, width: undefined, height: 19 }).next()).toThrow();
})

test("does not divide rectangle where width or height are < 2 units", () => {
  let squares = divideRectangleIntoSquares({
    x: 0,
    y: 0,
    width: 1,
    height: 2,
  });
  
  expect(squares.next().value).toBeUndefined();
  
  squares = divideRectangleIntoSquares({
    x: 0,
    y: 0,
    width: 2,
    height: 1,
  });
  
  expect(squares.next().value).toBeUndefined();
});

test("correctly divides a rectangle of 17 by 19 units", () => {
  let squares = divideRectangleIntoSquares({
    x: 0,
    y: 0,
    width: 17,
    height: 19,
  });

  let expected = [
    { x: 0, y: 0, side: 17 },
    { x: 0, y: 17, side: 2 },
    { x: 2, y: 17, side: 2 },
    { x: 4, y: 17, side: 2 },
    { x: 6, y: 17, side: 2 },
    { x: 8, y: 17, side: 2 },
    { x: 10, y: 17, side: 2 },
    { x: 12, y: 17, side: 2 },
    { x: 14, y: 17, side: 2 },
  ];

  for (const item of expected) {
    expect(squares.next().value).toStrictEqual(item);
  }
});
