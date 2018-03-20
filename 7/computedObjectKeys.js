
/**
 * InJavaScript, objects are associative arrays (hashmaps) with String keys. 
 * We will refine this statement later with ES6 Symbols, but so far, our 
 * knowledge is limited to string keys. 
 * 
 * It is now possible to create an object property inside the object literal 
 * using the bracket notation:
 */

let arr = [1, 2, 3, 4, 5];

let experimentObject = {
  arr,
  [arr]: 1, 
  [arr.length]: 2,
  [{}]: 3
};

console.log("Part one");

console.log('experimentObject.arr', experimentObject.arr);
console.log('experimentObject[\'arr\']', experimentObject['arr']);
console.log('experimentObject[arr]', experimentObject[arr]);
console.log('experimentObject[arr.length]', experimentObject[arr.length]);
console.log('experimentObject[{}]', experimentObject[{}]);
console.log('experimentObject[\'[object Object]\']', experimentObject['[object Object]']);

/**
 * Honestly a bit more gibberish for me. Struggling to figure this part out.
 */

/**
 * Conclusions:
 * arrays and objects are converted to their toString values.
 * // Ok got this.
 * 
 * arr.toString() equals the concatenation of the toString value of each of its 
 * elements, joined by commas.
 * // Got this too, fine. 
 * 
 * the toString value of an object is [object Object] regardless of its contents
 * // Checking this out further below... 
 * 
 * when creating or accessing a property of an object, the respective toString 
 * values are compared
 * // Ok.... hang on.
 */

let arr2 = [1, 2, 3, 4, 5];
let obj2 = {
  'thing': 23
};

let experimentObject2 = {
  arr2,
  [arr2]: 1, 
  [arr2.length]: 2,
  [obj2]: 3
};

console.log("Part two");
console.log('experimentObject2[\'[object Object]\']', experimentObject2['[object Object]']);

/**
 * that prints 3. so the contents of the object are irrelevent. 
 * 
 * But why are the keys arrays? Ie surrounded by []?
 */

let arr3 = [1, 2, 3, 4, 5];
let obj3 = {
  'thing': 43
};

let experimentObject3 = {
  arr3,
  arr3: 1, 
  // arr3.length: 2, accessing a property of another object seems to break syntax here.
  obj3: 3
};

console.log("Part three");
console.log('experimentObject3.arr', experimentObject3.arr3);
console.log('experimentObject3[\'arr\']', experimentObject3['arr3']);
console.log('experimentObject3[arr]', experimentObject3[arr3]);
console.log('experimentObject3[arr.length]', experimentObject3[arr3.length]);
console.log('experimentObject3[{}]', experimentObject3[{}]);
console.log('experimentObject3[\'[object Object]\']', experimentObject3['[object Object]']);

/**
 * Humm, most of that is undefined, except the accessing of arr3 property, which returns 1
 * both times.
 * 
 * Need to dig a bit deeper on that syntax. 
 */