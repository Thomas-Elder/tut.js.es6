
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
    console.log('Adding ', value, ' to the basket');
    this.basketValue += value;
    console.log('Current value: ', this.basketValue);
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

/**
 * (Solution) Exercise 3. Create an object myBasket, and set its prototype to the 
 * object created in Exercise 2. 
 * 
 * Create an array field in myBasket, containing all the items that you purchase in the following format:
 *  { itemName: 'string', itemPrice: 9.99 }
 * 
 * Redefine the addToBasket method such that it accepts an itemName and an itemPrice. 
 * 
 * Call the addToBasket method in the prototype for the price administration, and store the 
 * itemName-itemPrice datalocallyin your array. 
 * 
 * Make sure you modify the clearBasket method accordingly.
 */

let myBasket = {
  basketItems: [],

  addToBasket(itemName, itemPrice) {
    this.basketItems.push({itemName, itemPrice});
    super.addToBasket(itemPrice);
  },

  clearBasket(){
    this.basketItems = [];
    super.clearBasket();
  },

  removeFromBasket(index) {
    super.addToBasket(-this.basketItems[index].itemPrice);
    this.basketItems.splice(index, 1);
  },

  printBasket(){
    if (this.basketItems.length === 0) {
      console.log('The basket is empty.');
    } else {
      console.log('Basket contents:');
      this.basketItems.forEach(item => console.log(item));
    }
  }
};

Object.setPrototypeOf(myBasket, proto);

myBasket.addToBasket('Thing', 20);
myBasket.addToBasket('Thing', 30);
myBasket.addToBasket('Thing', 40);
myBasket.printBasket();

console.log();
console.log('Getting basket value... ');
myBasket.getBasketValue();

console.log();
console.log('Paying... ');
myBasket.pay();

console.log();
console.log('Clearing... ');
myBasket.clearBasket();
myBasket.printBasket();

console.log();
console.log('Adding back to basket... ');
myBasket.addToBasket('Thing', 20);
myBasket.addToBasket('Thing', 30);
myBasket.addToBasket('Thing', 40);
myBasket.printBasket();

console.log();
console.log('Removing index 1 from basket... ');
myBasket.removeFromBasket(1);
myBasket.printBasket();

/**
 * Exercise4.
 * Extend your solution in Exercise 3 by adding a removeFromBasket( index ) method. 
 * 
 * The parameter index should be the index of the element in the array that you would like to remove.
 * 
 * I'm just going to add this above to myBasket to avoid duplicate objects.
 */

