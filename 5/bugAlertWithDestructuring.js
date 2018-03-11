/*eslint no-unused-vars: "off"*/

/**
 * Software developers tend to make mistakes. Don’t overuse destructuring, always keep your code readable! 
 * 
 * Continuing the user example,suppose you make a typo, and write neme instead of name.
 */

// let { neme } = user;

// console.log(neme); 
// undefined

/**
 * The type silently assigns the value undefined to neme. 
 * 
 * In a L=R destructuring expression, R cannot be null or undefinied, otherwise a typeerror is thrown
 */

let testUser = null;

let {name, email} = testUser; // TypeError: Cannot destructure property `name` of 'undefined' or 'null'.
