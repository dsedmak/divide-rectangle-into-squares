const divideRectangleIntoSquares = require("./divideRectangleIntoSquares.js");

let squares = divideRectangleIntoSquares({ x: 0, y: 0, width: 17, height: 19 });
let squaresAsJson = JSON.stringify(Array.from(squares));

console.log(squaresAsJson);