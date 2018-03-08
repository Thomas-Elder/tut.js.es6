
/**
 * Prototypal Inheritance in ES5
 */

function ShapeES5(colour) {
  this.colour = colour
}

ShapeES5.prototype.getColour = function (){
  return this.colour
}

function RectangleES5(colour, width, height) {
  ShapeES5.call(this, colour)
  this.width = width
  this.height = height
}

RectangleES5.prototype = Object.create(ShapeES5.prototype)
RectangleES5.prototype.constructor = RectangleES5

RectangleES5.prototype.getArea = function() {
  return this.width * this.height
}

let rectangleES5 = new RectangleES5('red', 5, 8)

console.log(rectangleES5.getArea())
console.log(rectangleES5.getColour())
console.log(rectangleES5.toString())

/**
 * The ES6 Way
 */

class ShapeES6 {
  constructor(colour) {
    this.colour = colour
  }

  getColour() {
    return this.colour
  }
}

class RectangleES6 extends ShapeES6 {
  constructor(colour, width, height) {
    super(colour)
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

let rectangleES6 = new RectangleES6('blue', 5, 9)

console.log(rectangleES6.getArea())
console.log(rectangleES6.getColour())
console.log(rectangleES6.toString())
