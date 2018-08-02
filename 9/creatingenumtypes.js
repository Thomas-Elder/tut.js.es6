
/**
 * Creating enum types
 * Enums allow you to define constants with semantic names and unique values. 
 * 
 * Given that the values of symbols are different, they make excellent values for 
 * enumerated types.
 */

const directions = { 
  UP : Symbol( 'UP' ), 
  DOWN : Symbol( 'DOWN' ), 
  LEFT : Symbol( 'LEFT' ), 
  RIGHT: Symbol( 'RIGHT' ) 
};

/**
 * Honestly, I've never really gotten enums. Let's have a closer look.
 * 
 * Like can I now create a variable of type directions, which can only be 
 * UP/DOWN etc? 
 */

let dir = directions.DOWN; 

/**
 * Not quite what I was thinking, but I was thinking in a different language. So given
 * the weak typing of js, it's just a way to specify appropriate values.
 * 
 * Symbols are handy for this becuase they are g-teed unique values.
 */