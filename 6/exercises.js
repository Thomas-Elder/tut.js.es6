/*eslint no-unused-vars: "off"*/

/**
 * Exercise 1. Make a shallow copy of an array of any length in one destructuring assignment.
 */
console.log('Exercise 1');

let [...a] = [1, 2, 3 , 4, 5];

console.log(a);

/**
 * Exercise 2: Determine the value logged to the console on Google Chrome without running it. 
 * 
 * Write down the mechanism behind it using your own words. 
 */
console.log('Exercise 2');

let f = () => [...'12345']; 
/** Ok so f is now a function that returns an array [1, 2, 3, 4, 5]
 * The spread operation [... '12345'], assigns the string as an array of characters. 
 */

let A = f().map( f );
/**
 * So... 
 * 
 * The map() method creates a new array with the results of calling a provided function 
 * on every element in the calling array.
 * 
 * So... the result of f() is going to be [1,2,3,4,5], and then we're calling 
 * [1,2,3,4,5].map() and passing in f to that function?
 * 
 * Ooooh, so for each element of the array, map assigns the value returns from f(). So
 * we end up with a square 2D array,
 * [[1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5]]
 * 
 */

console.table( A );

/**
 * Exercise 3. Create an 10x10 matrix of null values.
 */
console.log('Exercise 3');

let arr = () => [1,2,3,4,5,6,7,8,9,10];
let nuf = () => {
  return null;
};

let ans = arr().map(arr).map(nuf);

console.log(ans);

/** Exercise 4. Rewrite the sumArgs function of this tutorial in ES2015, 
 * using a rest parameter and arrow functions.
 */
console.log('Exercise 4');

function sumArgs() { 
  var result = 0; 
  for( var i = 0; i < arguments.length; ++i ) { 
    result += arguments[i]; 
  }

  return result; 
}

/**
 * Exercise 5. Complete the following ES2015 function that accepts two String arguments, 
 * and returns the length of the longest common substring in the two strings.
 * 
 * The algorithmic complexity of the solution does not matter.
 */
console.log('Exercise 5');

let maxCommon = ([head1,...tail1], [head2,...tail2], len = 0) => { 
  if ( typeof head1 === 'undefined' || typeof head2 === 'undefined' ) { 
    /* Write code here */ 
  } 
  
  if ( head1 === head2 ) {/* Write code here */} 
  
  let firstBranch = 5;/* Write code here */ 
  
  let secondBranch = 5;/* Write code here */ 
  
  return Math.max( ...[len, firstBranch, secondBranch ] ); 
};

maxCommon( '123', '1' );