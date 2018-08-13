
/**
 * New string methods
 * 
 * Some popular checks that can be done with regex are now possible in a more 
 * semantic way (fucking hell, semantic === they're functions now)
 */

let s1 = 'hello world';
let s2 = 'gooodbye world';

console.log('s1 starts with s2:', s1.startsWith(s2)); // false
console.log('s1 starts with h:', s1.startsWith('h')); // true

console.log('s1 endswith s2:', s1.endsWith(s2)); // false
console.log('s1 endswith d:', s1.endsWith('d')); // true

console.log(s1.repeat(3)); // hello worldhellow worldhello world

let s3 = 'Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz';

console.log('s3 startswith rindfleisch', s3.startsWith('Rindfleisch')); //true
console.log('not good'.endsWith('good')); //true
console.log('good or bad'.includes('or')); //true
console.log('ha'.repeat(3)); //true