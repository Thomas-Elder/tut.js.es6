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
    return len;
  } 
  
  if ( head1 === head2 ) {
    return maxCommon(tail1, tail2, len+1);
  }
  
  let firstBranch = maxCommon(tail1, [head2,...tail2], 0);
  
  let secondBranch = maxCommon([head1,...tail1], tail2, 0);
  
  return Math.max( ...[len, firstBranch, secondBranch ] ); 
};

console.log(maxCommon( '123', '1' ));
console.log(maxCommon( '11111', '11f111g'));
console.log(maxCommon( 'abc', '111cab' ));
console.log(maxCommon( 'abcgilisticksnavl', '111gilisticcab' ));

/**
 * This solution is close to gibberish for me. Here's the explanation from the book;
 * 
 * We will use an optional len argument to store the number of character matches 
 * before the current iteration of maxCommon was called. We will use recursion to 
 * process the strings. If any of the strings have a length of 0, either head1, 
 * or head2 becomes undefined.
 * 
 * This is our exit condition for the recursion, and we return len, i.e. the number 
 * of matching characters right before one of the strings became empty. 
 * 
 * If both strings are non-empty, and the heads match, we recursively call maxCommon 
 * on the tails of the strings, and increase the length of the counter of the 
 * preceding common substring sequence by 1. If the heads don’t match, we remove one 
 * character from either the first string or from the second string, and calculate 
 * their maxCommon score, with len initialized to 0 again. 
 * 
 * The longest string may either be in one of these branches, or it is equal to len, 
 * counting the matches preceding the current strings [head1,...tail1] and 
 * [head2,...tail2].
 */