
/**
 * Declarations with const are block scoped,they have to be initialized, and their 
 * value cannot be changed after initialization.
 */

const PI = 3.1415
//PI = 3.14 // TypeError: Assignment to constant variable.

//const PI2 // SyntaxError: Missing initializer in const declaration

console.log(PI)