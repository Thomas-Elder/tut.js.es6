
/**
 * Object prototype extensions and super calls
 * 
 * The Object API has been extended with two methods to get and set the prototype of an object:
 */

// Object.getPrototypeOf( o ) returns the prototype of o
// Object.setPrototypeOf( o, proto ) sets the prototype of o to proto

let proto = {
  whoami() {
    console.log('I am proto');
  }
};

let obj = {
  whoami() {
    super.whoami();
    console.log('I am obj');
  }
};

console.log(Object.getPrototypeOf(obj));
// {}

Object.setPrototypeOf(obj, proto);

obj.whoami();
// I am proto
// I am obj

