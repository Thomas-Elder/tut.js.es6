
/**
 * After the introduction of new.target for classes in 4, we now understand it more deeply
 * by using the same language construct for functions.
 * 
 * You can retrieve the constructor function of an object inside the constructor by using
 * new.target
 */

function MyConstructor() {
  console.log(new.target === MyConstructor, typeof new.target);

  if (typeof new.target === 'function')
    console.log(new.target.name);
}

new MyConstructor();

MyConstructor();

/**
 * Whenever we call a constructor function with the new operator, new.target contains a 
 * reference to the constructor function. 
 * 
 * Whenever we call a construction function without the new operator, the new.target will
 * be undefined. 
 */