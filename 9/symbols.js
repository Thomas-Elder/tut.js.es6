
/**
 * ES6 introduces a new primitive type for JS; Symbols. 
 * 
 * A js symbol is created by the global Symbol() function. Each time the 
 * Symbol() function is called, a new unique symbol is returned...
 */

let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1 === symbol2);
// > false

/** Symbols don't have a literal value, all you should know about the gvalue of a 
 * symbol is that each symbol is treated as a unique value.
 * In onther words, no two symbols are equal. Symbol is a new type in JS.
 * 
 */

console.log(typeof symbol1);
// > "symbol"

/**
 * Symbols are useful because they act as unique object keys.
 */

let myObject = {
  publicProperty : 'Value of myObject[ "publicProperty" ]'
};

myObject[symbol1] = 'Value of myObject[ "symbol1" ]';
myObject[symbol2] = 'Value of myObject[ "symbol2" ]';

console.log(myObject);

console.log(myObject[symbol1]);