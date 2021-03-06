/*eslint no-unused-vars: "off"*/

/**
 * Exercise 1. Swap two variables using one destructuring assignment. 
 */
console.log('Exercise 1');

let {a, b} = {a: 'one', b: 'two'};

console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

/**
 * Exercise 2. Complete the below function that calculates the nth fibonacci 
 * number in the sequence with one destructuring assignment! 
 * 
 * The definition of Fibonacci numbers is the following:
 * fib( 0 ) = 0
 * fib( 1 ) = 1
 * fib( n ) = fib( n-1 ) + fib( n-2 );
 */
console.log('Exercise 2');

function fib (n){
  let fibCurrent = 1;
  let fibLast = 0;

  if (n < 0) return NaN;
  if (n <= 1) return n;

  for (let fibIndex = 1; fibIndex < n; ++fibIndex) {
    // Insert one destructuring expression here

    [fibCurrent, fibLast] = [fibCurrent + fibLast, fibCurrent]; 
  }

  return fibCurrent;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

// nice.

/**
 * Exercise 3. Determine all the bindings in the following assignment, and describe the 
 * execution of the destructuring assignment.
 * 
 * Notice that loft is not the same variable name as left.
 */
console.log('Exercise 3');

//let node = { left : { left: 3, right: 4 }, right: 5 };
//let { loft : {}, right : val } = node;

// Ok let's get explicit with it

//let { loft : {}, right : val } = { left : { left: 3, right: 4 }, right: 5 };

// Loft = {}, right = 5
// Given loft doesn't match left, it isn't assigned the value of left. It has a default
// value of {}, so that is used. 
// val is assigned the value from the rhs right, so 5.

//console.log(loft, right);

/**
 * Ok so I didn't get the loft bit totally right. After not matching anything rhs, the assignment
 * {} = undefined is attempted. 
 * This falls over because you cannot have undefined or null on the rhs.  
 */

/**
 * Exercise 4. Create one destructuring expression that declares exactly one variable to retrieve x.A[2].
 */
console.log('Exercise 4');

let x = { A: [ 't', 'e', 's', 't' ] };

let {A:[,,third]} = x;

console.log(third);

/**
 * Exercise 5. Suppose the following configuration object of a financial chart is given:
 */
console.log('Exercise 5');

let config = {
  chartType: 0,
  bullColour: 'green',
  bearColour: 'red',
  days: 30
};

/**
 * Complete the function signature below such that the function may be called with any config 
 * objects (null and undefined are not allowed as inputs). 
 * 
 * If any of the four keys are missing, substitute their default values. 
 * 
 * The default values are the same as in the example configuration object.
 */

function drawChart(data, {chartType=0, bullColour='green', bearColour='red', days=30}) {
  
  console.log(chartType);
  console.log(bullColour);
  console.log(bearColour);
  console.log(days);
}

drawChart(40, {chartType:5, bullColour:'blue', bearColour:'orange', days:50});

/**
 * Exercise 6. Modify your solution in Exercise 5 such that the user may omit the option 
 * parameter, making its value undefined.
 */
console.log('Exercise 6');

function drawChart6(data, {chartType=0, bullColour='green', bearColour='red', days=30}={}) {
  
  console.log(chartType);
  console.log(bullColour);
  console.log(bearColour);
  console.log(days);
}

drawChart6(5);