
/**
 * Static methods are operations defined on a class. 
 * 
 * These methods can only be referenced from the class itself, not from objects.
 */

class C {
  static create() { return new C(); }

  constructor() { console.log('Constructor'); }
}

var c = C.create();

c.create(); // TypeError: c.create is not a function