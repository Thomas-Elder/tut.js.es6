
/**
 * Let’s declare a logArea method in our shape object:
 */

let shapeName = 'Rectangle', a = 5, b = 3;

let shape = {
  shapeName,
  a,
  b,
  logArea() {
    console.log('Area: ', (a * b));
  },
  id: 0
};

shape.logArea();

/**
 * Notice that in ES5, we would have to write: function between logArea and () to make the same declaration work.
 * 
 * This syntax is called the concise method syntax. We first used the concise method syntax in 
 * Chapter 4 - Classes. 
 * 
 * Concise methods have not made it to the specification just to shave off 10 to 11 characters from the code. 
 * Concise methods also make it possible to access prototypes more easily. 
 * 
 * This leads us to the next section.
 */