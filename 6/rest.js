
/**
 * In some cases, you might want to deal with processing a variable number of 
 * arguments. In ES5, it was possible to use the arguments array inside a function 
 * to access them as an array:
 */

(function() {
  console.log(arguments);
})(1, 'Second', 3); // prints { '0': 1, '1': 'Second', '2': 3 }, interestingly not an array... 

/**
 * In ES2015, the last argument of a function can be preceded by ... 
 * This argument collects all the remaining arguments of the function in an array. 
 * The name for this construct is rest parameters, because it contains the rest of the 
 * parameters passed to a function. Let’s rewrite the above function in ES2015:
 */

((...args) => {
  console.log(args); 
})(1, 'Second', 3); // prints [ 1, 'Second', 3 ], interestingly... an array!