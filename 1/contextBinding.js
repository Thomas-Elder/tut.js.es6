
// ES5
/**
 * Ok so in ES5 you need to make 'this' context available in nested functions. If you call 'this' from within the function passed to setInterval, it refers to that function's context.
 * So we have a var self, set to the Ball function context, and that's what we reference inside the setInterval function parameter. 
 */
var Ball = function( x, y, vx, vy ) { 
  this.x = x; 
  this.y = y; 
  this.vx = vx; 
  this.vy = vy; 
  this.dt = 25; // 1000/25 = 40 frames per second 
  var self = this; // this is necessary so that
  setInterval( function() { 
    self.x += vx; // this works
    self.y += vy; 
    console.log( self.x, self.y ); 
  }, this.dt ); 
}

var ball = new Ball(0, 0, 1, 2);

/**
 * It's also possible to use the 'bind' command, to force the required context.
 */
var Ball = function( x, y, vx, vy ) { 
  this.x = x; 
  this.y = y; 
  this.vx = vx; 
  this.vy = vy; 
  this.dt = 25; // 1000/25 = 40 frames per second 
  setInterval( function() { 
    this.x += vx;
    this.y += vy; 
    console.log( this.x, this.y ); 
  }.bind(this), this.dt ); // binding the anonymous function to the ball context.
}

var ball = new Ball(0, 0, 1, 2);

// ES6
/**
 * ES6 arrow functions automatically inherits the enclosing context.
 */
var Ball = function( x, y, vx, vy ) { 
  this.x = x; 
  this.y = y; 
  this.vx = vx; 
  this.vy = vy; 
  this.dt = 25; // 1000/25 = 40 frames per second 
  setInterval( () => { 
    this.x += vx; // this refers to the ball function's context
    this.y += vy; 
    console.log( this.x, this.y ); 
  }, this.dt );
}

var ball = new Ball(0, 0, 1, 2);

/**
 * So clearer equivalents...
 */

var es5 = function (argument){ return this.value }.bind(this)
var es6 = (argument) => {return this.value};

