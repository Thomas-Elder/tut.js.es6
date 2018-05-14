
/**
 * Exercise 1
 * Implement a stack in ES6.
 */

// did this in the stacks.js file previously... copypasting and optimising here. 
/**
 * This is now based a bit on the solution given, which seems heaps cheaty, but I guess
 * unless you're actually creating your own linked list, it's going to be pretty cheaty. 
 */

class Stack {
  constructor(){
    this.array = [];
  }

  get length() {
    return this.array.length;
  }

  push(val){
    this.array.push(val);
  }

  pop(){
    return this.array.pop();
  }
}

/**
 * Exercise 2
 * Write a tail call optimised solution for the following fibonacci function...
 */

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

fib(2);

/**
 * Exercise 3
 * Write a fibonacci function that does not use recursion
 */

function fibonacci(n) {
  if (n <= 2)
    return 1;

  let fib = 0;
  let fiba = 1; 
  let fibb = 1;
  
  for(let i = 3; i <= n; i++) {
    fib = fiba + fibb;
    fibb = fiba;
    fiba = fib;
  }

  return fib;
}

for (let i = 1; i < 10; i++)
  console.log(fibonacci(i));

/**
 * With some dicking around I got this to work, which is similar to the solution.
 * 
 * But the solution uses some nifty destrcuturing, so it looks like:
 */

function fibonaccia(n) {
  if (n <= 1)
    return n;

  let fib = 1;
  let fiba = 0; 
  
  for(let i = 2; i <= n; ++i) {
    [fib, fiba] = [fib + fiba, fib];
  }

  return fib;
}

for (let i = 1; i < 10; i++)
  console.log(fibonaccia(i));

/**
 * Exercise 4
 * Rewrite the following code without using the class syntax of ES6.
 * 
 * Observe how new.target behaves.
 */

class AbstractUser {
  constructor() {
    if (new.target === AbstractUser)
      throw new Error('Abstract classes cannot be instantiated');

    this.accessMatrix = {};
  }

  hasAccess(page) {
    return this.accessMatrix[page];
  }
}

class SuperUser extends AbstractUser {
  hasAccess(page) {
    return true;
  }
}

let su = new SuperUser();

// let au = new AbstractUser(); //Error: Abstract classes cannot be instantiated

