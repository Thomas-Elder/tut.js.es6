/*eslint no-use-before-define: "off"*/

/**
 * Variables declared with var have function scope.
 * var declarations are initialized as 'undefined' and hoisted
 * 
 * Variables declared with let have block scope. 
 * let declarations are not initialized as 'undefined'.
 * Attempting to access the let variable before initialisation throws an error. 
 */

function logAge5() {
  console.log('age: ', age)
  var age = 25
}

logAge5()
// prints age: undefined

function logAge6() {
  console.log('age: ', age)
  let age = 25
}

logAge6()
// throws error as age is uninitialised

/**
 * The book calls this a temporal deadzone, as in the variable is not yet 
 * initialized at that time. This exists even if a variable of the same name 
 * is initialised outside the block...
 */

let guessMe = 1 
// A: guessMe is 1
console.log(guessMe)

{ 
  // Temporal Dead Zone of guessMe 
  let guessMe = 2 
  // C: guessMe is 2
  console.log(guessMe)
}

console.log(guessMe)
// D: guessMe is 1

/**
 * For a complete reference, the temporal dead zone exists for let, const, 
 * and class declarations. 
 * 
 * It does not exist for var, function, and function* declarations.
 */