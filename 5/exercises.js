
/**
 * Exercise 1. Swap two variables using one destructuring assignment. 
 */

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