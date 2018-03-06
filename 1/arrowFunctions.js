// ES5
var sum = function( a, b ) { return a + b; };

// ES6
var sum = ( a, b ) => { return a + b; };

// ES6++ If the return value can be be described by one expression 
var sum = ( a, b ) => a + b;

// ES6+++ If there is only one parameter, the parentheses are not needed there
var square = a => a * a;

console.log("Chapter 1 - Arrow Functions")
console.log("The sum of 5 and 3 is ", sum(5, 3))
console.log("The square of 4 is ", square(4))