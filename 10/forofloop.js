
/**
 * The for-of loop
 * 
 * The for-of loop is a new powerful construct in es6 that simplifies your code.
 * 
 * The for-of loops works for any js iterable object.
 */

/**
* Let's log the chars from a string.
*/

let message = 'hello';

for (let i in message)
  console.log(message[i]);

/**
 * I think I would've done this differently... 
 * 
 * I was thinking of this:
 * message.forEach(element => {
  console.log(element);
});
 * which doesn't work as message isn't an array. 
 * 
 * carry on... 
 */

/**
 * So it says:
 * 
 * Often times, you need message[i] inside the loop block, and not i. Therefore, 
 * it makes perfect sense to use a loop that gives us the value message[i] instead 
 * of i. This is what the for-of loop provides us with.
 * 
 * But I don't really understand why...
 */

for (let ch of message)
  console.log(ch);

/**
 * I mean the code is a bit cleaner, but I don't see why this is necessary... I can do
 * this with message[i].
 */

 