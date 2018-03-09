
/**
 * Super.
 * 
 * The super keyword calls the constructor of the parent class. It should be the first
 * thing done in a constructor.
 * 
 * If you don't call super in the constructor of an inheriting class, an error will be thrown.
 */

class A { 
  constructor(){ 
    console.log('A');
  } 
}
// class B extends A { constructor() { console.log('B') }}
// eslint highlights the above as an error saying there's no super call

new A(); // prints A

/**
 * If you don't specify a constructor at all, one will be automatically created, basically
 * just a call to super
 */

class C extends A {}

new C(); // prints A

// quick test... 

class D extends A {
  constructor() {
    super();
    console.log('D');
  }
}

new D(); // prints A, then D
