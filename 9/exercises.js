
/**
 * Exercise 1.
 * What are the pros and cons of using an underscore prefix for expressing our 
 * intention that a field is private? Compare this approach with symbols!
 */

/**
 * Pros: 
 * notation and developer experience is simple, provided that your team spreads this 
 * practice
 * 
 * it does not result in a hard-to-read code structure, all you need is one more 
 * character
 * 
 * Cons:
 * the properties are not private in practice, they are just denoted as private, 
 * which opens up a possibility of hacking quick and dirty solutions
 * 
 * unlike symbols, there is no clear separation between public and private properties. 
 * Private properties appear in the public interface of an object and they are 
 * enumerated in for..ofloops, using the spread operator, and Object.key
 * 
 */


/**
 * Exercise2.
 * Find a way to simulate truly private fields in JavaScript!
 * 
 * Honestly this is going through to the keeper, I think I'll move on. 
 */