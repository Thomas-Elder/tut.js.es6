
/**
 * In the scope where an object is created, it is possible to use other variables for initialization.
 */

let shapeName = 'Rectangle', a = 5, b = 3;
let shape = {shapeName, a, b, id: 0};

console.log(shape);

/**
 * It is possible to use this shorthand in destructuring assignments for the purpose of creating new fields:
 */

let { x, y } = { x: 3, y: 4, z: 2 };
console.log( y, typeof y ); // 4 "number"
console.log( x, typeof x ); // 3 "number"