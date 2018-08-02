/*eslint no-unused-vars: "off"*/

/**
 * Symbols as semi-private property keys
 * 
 * Creating truly private properties and operations is feasible, but it's not 
 * an obvious task in javascript.
 * 
 * Even though cymbols to do not make attributes private they can be used as notation 
 * for private properties. You can use symbols to separate the enumeration of public an
 * private properties, and the notation makes that clear. 
 */

const _width = Symbol('width');

class Square {
  constructor(width){
    this[_width] = width;
  }

  getWidth(){
    return this[_width];
  }
}

/**
 * As long as you can hide the _width constant, you should be fine.
 * 
 * One option to hide _width is to create a closure:
 */
let Square2 = (function(){
  const _width = Symbol('width');

  return class {
    constructor(width){
      this[_width] = width;
    }
  
    getWidth(){
      return this[_width];
    }
  };
});

/**
 * The advantage of this approach is that it becomes intentionally harder to 
 * access the private _width value of our objects. It is also evident which of our
 * properties are intended to be public, and which are intended to be private.
 * 
 * The solution is not bullet proof, but some developers do use this approach in 
 * favor of indicating privacy by starting a variable with underscore. 
 */

/**
 * The drawbacks are also obvious:
    • By calling Object.getOwnPropertySymbols, we can get access to the symbol keys. 
      Therefore, private fields are not truly private 
    • developer experience is also worse, as you have to write more code. Accessing 
      private properties is not as convenient as in Java or TypeScript for example
 * 
 * Some developers will express their opinion on using symbols for indicating privacy. 
 * In practice, your team has the freedom of deciding which practices to stick to, 
 * and which rules to follow. If you agree on using symbols as private keys, it is 
 * a working solution, as long as you don’t start writing workarounds to publicly 
 * access private field values.
 */

/**
 * If you use symbols to denote private fields, you have done your best to indicate
 * that a property is not to be accessed publicly. When someone writes code violating 
 * this common sense intention, they should bear the consequences. 
 * 
 * There are various methods for structuring your code such that you indicate that
 * some of your variables are private in JavaScript. None of them looks as elegant 
 * as a private access modifier. 
 * 
 * If you want true privacy, you can achieve it even without using ES6. Exercise 2
 * deals with this topic.
 * 
 * The question is not whether it is possible to simulate private fields in JavaScript. 
 * 
 * The real question is whether you want to simulate them or not. Once you figure out 
 * that you don’t need truly private fields for development, you can agree whether 
 * you use symbols, weak maps (see later), closures, or a simple underscore prefix 
 * in front of your variables. 
 */