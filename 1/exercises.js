/**
 * Exercise 1: Write an arrow function that returns the string 'Hello World!'. 
 */
var helloWorld = () => "Hello World!"
console.log(helloWorld())
var helloWorld = () => { return "Hello World Again!" }
console.log(helloWorld())

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

var Entity = function( name, delay ) { 
   this.name = name; 
   this.delay = delay; 
};
 
Entity.prototype.greet = function() { 
  setTimeout( function() { 
    console.log( 'Hi, I am ' + this.name ); 
  }.bind( this ), this.delay ); 
};

var java = new Entity( 'Java', 5000 ); 
var cpp = new Entity( 'C++', 30 );

java.greet(); 
cpp.greet();

// Solution
var Entity = function ( name, delay ) { 
  this.name = name; 
  this.delay = delay; 
};

Entity.prototype.greet = function() { 
 setTimeout( () => { 
   console.log( 'Hi, I am ' + this.name ); 
 }, this.delay ); 
};

var java = new Entity( 'Java', 5000 ); 
var cpp = new Entity( 'C++', 30 );

java.greet(); 
cpp.greet();
