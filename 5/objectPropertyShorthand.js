
/**
 * Suppose the follwing ES5 code is given:
 */

var language = 'Markdown'
var extension = 'md'
var fileName = 'destructuring'

var fileES5 = {
  language: language,
  extension: extension,
  fileName: fileName
}

// This can be done more compactly in ES6
var fileES6 = { language, extension, fileName }

console.log(fileES5)
console.log(fileES6)

/**
 * This prints out:
 * 
 * { language: 'Markdown',
 *   extension: 'md',
 *   fileName: 'destructuring' }
 * { language: 'Markdown',
 *   extension: 'md',
 *   fileName: 'destructuring' }
 */