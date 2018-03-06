/**
 * Exercise 1: Write an arrow function that returns the string 'Hello World!'. 
 */
var helloWorld5 = () => 'Hello World!'
console.log(helloWorld5())
var helloWorld6 = () => { return 'Hello World Again!' }
console.log(helloWorld6())

/**
 * Exercise 2: Write an arrow function that expects an array of integers, 
 * and returns the sum of the elements of the array. 
 * 
 * Use the built-in method reduce on the array argument.
 * 
 * From MSDN:
 * The reduce() method applies a function against an accumulator and each 
 * element in the array (from left to right) to reduce it to a single value.
 * 
 * The accumulator is the running total, and the second argument is each element
 * in the array. 
 */

var sum = (values) => {
  return values.reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(sum([1, 2, 3, 4]))

/**
 * Exercise 3: Rewrite the following code by using arrow functions wherever 
 * it makes sense to use them:
 */

var Entity5 = function( name, delay ) { 
  this.name = name
  this.delay = delay
}
 
Entity5.prototype.greet = function() { 
  setTimeout( function() { 
    console.log( 'Hi, I am ' + this.name )
  }.bind( this ), this.delay )
}

var java5 = new Entity5( 'Java', 5000 )
var cpp5 = new Entity5( 'C++', 30 )

java5.greet()
cpp5.greet()

// Solution
var Entity6 = function ( name, delay ) { 
  this.name = name
  this.delay = delay
}

Entity6.prototype.greet = function() {
  setTimeout( () => {
    console.log( 'Hi, I am ' + this.name ) 
  }, this.delay ) 
}

var java6 = new Entity6( 'Java', 5000 )
var cpp6 = new Entity6( 'C++', 30 )

java6.greet()
cpp6.greet()
