
/**
 * Exercise1.
 * Suppose an array of firstName, email, basketValue triples are given.
 * 
 * Create a JavaScript expression that puts a default value of '-' and 0 to the 
 * firstName or basketValue fields respectively, whenever the firstName or the basketValue 
 * keys are missing. 
 */

let baskets = [
  {
    // ok so it needs to add the basketValue property to this object, set to 0
    firstName: 'Andrew',
    email: '123@gmail.com'
  },
  {
    // needs to add firstName: '-' and basketValue: 0 to this one
    email: '456@gmail.com'
  },
  {
    // this one is all g
    firstName: 'Mark',
    email: '789@gmail.com',
    basketValue: 55
  }
];

console.log('before');
console.log(baskets);

let otherBaskets = baskets.map(item => Object.assign({firstName: '-', basketValue: 0}, item));

console.log('otherBaskets');
console.log(otherBaskets);

/**
 * How to do this in place? Without otherBaskets?
 */


/**
 * Exercise 2. Create a prototype object with the following methods:
 *  addToBasket( value ) adds value to the basket value
 *  clearBasket() sets the basket value to 0
 *  getBasketValue() returns the basket value
 *  pay() logs the message {getBasketValue()} has been paid, where {getBasketValue()} is the 
 *  return value of the method with the same name.
 */

let proto = {
  basketValue: 0,

  addToBasket(value) {
    this.basketValue =+ value;
  },
  
  clearBasket() {
    this.basketValue = 0;
  },
  
  getBasketValue() {
    return this.basketValue;
  },

  pay() {
    console.log(this.getBasketValue() + ' has been paid.');
  }
};

console.log(proto.getBasketValue());
proto.addToBasket(5);
console.log(proto.getBasketValue());
proto.pay();