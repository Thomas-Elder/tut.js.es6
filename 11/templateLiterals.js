
/**
 * Template literals
 * 
 * The purpose of template literals is to evaluate and insert values of JS expressions
 * in a template string. 
 */

let x = 555;

let evaluatedTemplateA = `${x} === 555 is ${x === 555}`; // gotta use backticks ` for the parsing

console.log(evaluatedTemplateA);

let y = '555';
let evaluatedTemplateB = `${y} === 555 is ${y === 555}`;
console.log(evaluatedTemplateB);

// In the second eg, y is a string and so doesn't strictly equal 555. 

/**
 * One practical application of template literals is the creation of DOM markup '
 * with static structure, and dynamic values. For more information, check out my 
 * article on Underscore templating2. If you compare the ES6 syntax, you will find 
 * that it is a lot more compact than the Underscore syntax.
 */