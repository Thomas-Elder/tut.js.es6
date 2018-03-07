/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/

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
  //console.log('age: ', age)
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

/**
 * Ok so if var is function scope and let is block scope then...
 */

let array = [1, 2, 3, 4]

for (var index = 0; index < array.length; index++) {
  console.log(array[index])
  var a = 1
  //let b = 2
}

console.log('a is ', a)
//console.log('b is ', b)

/**
 * So if you uncomment the let b and consolelog b statements, you get a 'not defined' error
 * while the var statement works without error. 
 * 
 * That's because the let statement is confined to the block, while the var 
 * statement is effectively global here.
 * 
 * In ES6 the above iteration would look like:
 */

console.log('es6 array syntax... ')

array.forEach((element, index) => {
  console.log(element)
  console.log(index)
})