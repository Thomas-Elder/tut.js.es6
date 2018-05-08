
/**
 * Stacks
 * We will need a basic understanding of how stacks work to understand the next section. 
 * 
 * Imagine a stack like a JavaScript array whose elements are not accessible. 
 * 
 * Suppose stack S is given. You can only execute the following operations on it:
 * S.length: checks the length of the stack
 * S.push( element ): pushes an element to the stack
 * S.pop():removes the top element from the stack and returns it
 * You can neither access, nor modify any elements of the stack other than the element at position S.length - 1 (ie the last element).
 * 
 * In Exercise 1, you will have a chance to implement a stack in ES6. 
 */

/**
 * Ok hold up. This is all pretty straight forward, but I want to just implement a quick stack here, to make
 * sure I'm all over it.
 * 
 * It's basically just going to be a wrapper on an array.  
 */

class Stack {
  constructor(){
    this.array = new Array();
    this.length = 0;
  }

  push(val){
    this.array.push(val);
    this.length++;
  }

  pop(){
    let val = this.array[this.length - 1];

    this.array = this.array.slice(0, this.length - 1);
    this.length--;

    return val;
  }
}

let stack = new Stack();

console.log('Pushing 3, 2, 1:');
stack.push(3);
stack.push(2);
stack.push(1);
console.log('stack.length:', stack.length);
console.log('stack.pop', stack.pop());
console.log('stack.length:', stack.length);
console.log();

// Ok so this could be a little closer to the bone, but you get the picture.

/**
 * There are two types of memory available to you: the stack and the heap. 
 * 
 * The heap is used for dynamic memory allocation, while the stack is used for static memory allocation. 
 * 
 * Accessing the stack is very fast, but the size of the stack is fixed. A stack frame is created for the global scope. 
 * Then for each function call, another stack frame is added to the top. These frames stack on top of each other. When 
 * executing JavaScript code, you get a stack with limited size to work with. To get an idea of typical stack size limits 
 * in practice, look at this page1 of StackOverflow.com: https://stackoverflow.com/questions/7826992/browser-javascript-stack-size-limit
 * 
 * Regardless of the browser, iterating from zero to a million in a for loop is a very easy task.
 */

console.log('Timing how long it takes to run 0-1000000 in a for loop.');
console.time( 'for loop' ); 

let sum = 0;

for ( let i = 0; i < 1000000; ++i ) { 
  sum += i; 
}
console.log('result:', sum);
console.timeEnd( 'for loop' ); //for loop: 43.405ms
console.log();

/**
 * Doing the same iteration as a recursive call is a very hard task that most browsers are not able to solve because 
 * of the stack limit. 
 * 
 * Execution is fast, but the stack limit will not make it possible to execute a million calls.
 */

function sumToN( n ) { 
  if ( n <= 1 ) return n; 
  return n + sumToN( n - 1 ); 
}

console.log('Timing how long it takes to run 0-1000 in a recursive loop.');
console.time('recursion');
console.log(sumToN(1000));
console.timeEnd('recursion');

// console.log(sumToN(1000000));
// RangeError: Maximum call stack size exceeded
console.log();

/**
 * Let’s examine how the following program is executed on the stack:
 */

function sumToN2( n ) { 
  if ( n <= 1 ) return n; 
  return n + sumToN( n - 1 ); 
}

sumToN2( 2 );

/**
 * 1. initially, a reference to the sumToN function is created on the global stack frame 
 * 
 * 2. Once sumToN( 2 ) iscalled,anotherstackframeiscreated,containing the value of n, the expected 
 * return value, and a reference to sumToN 
 * 
 * 3. Once sumToN( 1 ) is called, another stack frame is created with another value of n, the expected 
 * return value, and a reference to sumToN 
 * 
 * 4. Once sumToN returns 1, the last stack frame is destroyed 
 * 
 * 5. Once sumToN( 2 ) is computed, the stack frame created in step (2) is destroyed
 * 
 * Beyond a five digit stack limit, execution stops, and a JavaScript error is thrown. This is the 
 * behavior we will combat with tail call optimization.
 */

/**
 * Ok so every call to the function is a new stack. Because recursive solutions require many calls to a 
 * function, this results in many frames.
 */
