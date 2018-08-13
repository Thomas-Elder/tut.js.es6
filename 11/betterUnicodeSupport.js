
/**
 * Better unicode support
 * 
 * We are going a bit lower level in this section. 
 * 
 * In ES5, string operations are handled in two byte chunks. As a consequence, 
 * handling unicode strings with a mixture of two and four byte long codes was 
 * often confusing. 
 * 
 * Characters of unicode strings were often not printable on their own, and in 
 * general, any string operation required extra care. For instance, if you recall 
 * the first exercise of the last section, the reference solution would have failed 
 * if a title had started with a three or four byte long character. 
 * 
 * Even though the length of a string is still based on the number of bytes allocated 
 * by a string divided by two, there are some updates in ES6 that make String handling 
 * more user friendly.
 * 
 * codePointAt( n ) returns the code of the character at the nth position regardless 
 * of whether it is a two byte or a four byte long character. If n points at the 
 * second half of a four byte unicode character, only the code of the second half
 * is returned...
 */

// wut... let's read on.

/**
 * In ES6 it is possible to define four byte long Unicode chars with their code;
 */

'\u{1f600}'; //becomes an emoji
'\u{1f600}'.length; // is 2
'\u{1f600}'.charCodeAt(0); // is 55357
'\u{1f600}'.codePointAt(0); // is 128512
'\u{1f600}'.charCodeAt(1); // is 56832
'\u{1f600}'.codePointAt(1); // is 56832
'\u{1f600}'.startsWith('\u{1f600}'[0]); // is true

/**
 * Note that the startsWith, endsWith and includes mehtods interpret the result in 
 * two byte chunks. 
 * 
 * The for-of loop interprets three and four byte long chars as one unit, scoring 
 * another convenience point for ES6. 
 */

let str = '\u{1f600}\u{00fa}é';

for (const ch of str)
  console.log(ch);

console.log([...str]);
console.log('str.length: ', str.length);

/**
 * Notice that
 * the for...of loop prints three characters, an emoji, ú, and é 
 * [...str] spreads str character by character 
 * even though [...str] has three elements, the length of the str string is 4. This 
 * is because the length of [...str][0] is 2
 * 
 * Use the for...of loop or the spread operator to process characters of a 
 * string regardless of their length in bytes.
 */

/**
 * This section contains a minimalistic summary of Unicode featues of ES6 from a 
 * practical point of view. If you have to handle four byte long characters on a 
 * regular basis, do your research. Make sure you know the normalize method for 
 * Unicode normalization. Make sure you know that there is a new u flag to 
 * influence whether to consider Unicode characters when testing regular expressions. 
 * 
 * Normalization and unicode support for regular expressions is outside the scope of 
 * this book.
 */
