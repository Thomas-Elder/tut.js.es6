/*eslint no-unused-vars: "off"*/

// ES5
var sumES5 = function( a, b ) { return a + b; };

// ES6
var sumES6 = ( a, b ) => { return a + b; };

// ES6++ If the return value can be be described by one expression 
var sumES6P = ( a, b ) => a + b;

// ES6+++ If there is only one parameter, the parentheses are not needed there
var square = a => a * a;

console.log('Chapter 1 - Arrow Functions');
console.log('The sum of 5 and 3 is ', sumES6P(5, 3));
console.log('The square of 4 is ', square(4));