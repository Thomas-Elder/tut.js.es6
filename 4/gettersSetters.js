
/**
 * Getters and setters are used to create computed properties. 
 */

class Square {
  constructor(width) {
    this.width = width;
  }

  get area() {
    return this.width * this.width;
  }
}

let square = new Square(50);

console.log(square.area);

square.area = 30;
console.log(square.area); // still prints 2500 as the previous 'setter' is not defined.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  //set width(w) { }
  //set height(h) { }
  
  /**
   * Ok so you can't really just create getter/setter for straight properties. 
   * 
   * Having get width() { return this.width }
   * causes issues because the 'this.width' call accesses the setter again, it just loops until
   * it runs out of stack. 
   * 
   * The setter needs to be something new also. Like I guess you could have a setter for 
   * 'doubleWidth', within which it would set a new width at half that...
   */

  set doubleWidth(dw) {
    this.width = dw / 2;
  }

  /**
   * Ok that works.
   * 
   * I think the point is that the getter/setter replaces properties, as in you shouldn't have a 
   * property, and a getter for that property. The getter should be something that cannot be 
   * a property, ie a computed value.
   */
}

let rect = new Rectangle(20, 10);

console.log();
console.log('Rectangle');
console.log(rect.area);
console.log(rect.height);
console.log(rect.width);
console.log();

console.log('Setting new width and height');
rect.doubleWidth = 30;
rect.height = 40;

console.log(rect.area);
console.log(rect.height);
console.log(rect.width);