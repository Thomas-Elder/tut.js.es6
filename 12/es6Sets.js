/**
 * ES6 Sets
 * 
 * A set data structure in ES6 is an ordered list of unique elements. 
 * 
 * You can create a set using the set constructor. Add elements to teh set using the add method. 
 * 
 * Check the size using the size property, and the has method to cehck if an element is a member of the set.
 */

let colors = new Set();

colors.add('red');
colors.add('green');
colors.add('red'); //duplicate elements are only added once.
console.log(colors); 
// > Set { 'red', 'green'}

console.log(colors.size);
// > 2

console.log(colors.has('green'));
// > true

/**
 * You can remove a value from a set by calling the delete method. The return value of the removal
 * is a boolean, indicating whether the removed element was a member of the set or not.
 */

console.log(colors.delete('green'));
// > true

console.log(colors.delete('green'));
// > false

/**
 * The set constructor accepts an optional array argument with initial values. All duplicates are eliminated.
 */

let moreColors = new Set(['red', 'blue', 'red']);
console.log(moreColors);
// > Set { 'red', 'blue' }