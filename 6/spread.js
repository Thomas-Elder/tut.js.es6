
/**
 * In ES5, we often used the apply method to call a function with variable number of arguments. 
 * The spread operator makes it possible to achieve the exact same thing in a more compact way. 
 * 
 * Suppose you would like to write a method that returns the sum of its arguments. Let’s write 
 * this function in ES5:
 */

function sumArgs() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log(sumArgs(1, 2, 3, 4, 5)); // > 15

/**
 * This is fine when we know what parameters we want to pass. 
 * 
 * Sometimes we don't know however. In ES5 people used the apply method apparently. 
 */

var arr = [];

for (var i = 0; i < 100; i++) {
  arr[i] = Math.random();
}

console.log(sumArgs.apply(null, arr));

/**
 * From MSDN:
 * 
 * The apply() method calls a function with a given this value, and arguments provided 
 * as an array (or an array-like object).
 */

/**
 * In ES2015 we can use the spread operator. 
 * 
 * The spread operator spreads the elements of an array into a parameter list. 
 */

console.log(sumArgs(...arr));

/**
 * Opposed to rest parameters, there are no restrictions on the location where the Spread 
 * operator is used in the parameter list. Therefore, the following call is also valid:
 */

console.log(sumArgs(...arr, ...arr, 5)); 

/**
 * Strings are spread as arrays of characters
 */

let stringToSpread = 'String to Spread';
let spreadString = [...stringToSpread];

console.log(spreadString); //prints [ 'S','t','r','i','n','g',' ','t','o',' ','S','p','r','e','a','d' ]

/**
 * Destructuring with the spread operator.
 * 
 * Let’s create an array that contains the last four characters of another array:
 */

let notGood = 'not good';
let [,,,, ...good] = notGood;

console.log(good); // [ 'g', 'o', 'o', 'd' ]

/**
 * Similarly to the rest parameter in functions, using ... on the left of a 
 * destructuring expression creates a match for all the remaining elements of the array:
 */

let [, ...A] = [1, 2, 3, 4];
console.log(A); // [ 2, 3, 4 ]

/**
 * And again, like rest parameters, it has to be at the end of the array
 */

// let [...B,] = [1, 2, 3, 4];
// console.log(B); // SyntaxError: Rest element must be last element

