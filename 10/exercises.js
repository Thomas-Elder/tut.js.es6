
/**
 * Exercise 1
 * 
 * Open the dev tools on your favourite news site. Locate the first chars of all 
 * headings and log the concat of those chars. 
 */




/**
 * Exercise 2 
 * 
 * Assemble a string containing all emojis between the hex codes 1f601 and 1f64f.
 * 
 * Use a for of loop.
 * 
 * Reference: http://apps.timwhitlock.info/emoji/tables/unicode
 * 
 * Also String.fromCodePoint converts a decimal number into a char, even if it is a
 * 4 byte long number. 
 */

let prefix = '1F6'; 
let digits4 = '01234'; 
let digits5 = '01234567890ABCDEF'; 
let emojis = '';


// Write code here 
let hexCode = '0x' + prefix + digit4 + digit5; 
emojis += String.fromCodePoint( hexCode ); 

// Write code her