
/**
 * Exercise 1. Write a function that executes a callback function after a 
 * given delay in milliseconds. 
 * 
 * The default value of delay is one second
 */

function delay(
  callback, 
  delay = 1000
) {
  setTimeout(callback, delay)
}

delay(() => console.log('delayed!'))
delay(() => console.log('more delayed!'), 2000)
delay(() => console.log('less delayed!'), 500)

/**
 * Exercise 2. Change the below code such that the second argument of 
 * printCommentExample has a default value that’s initially 1, and is 
 * incremented by 1 after each call.
 */

console.log('Exercise example:')
function printCommentExample( comment, line ) { 
  console.log( line, comment )
}
printCommentExample('Commenting on the example', 1)

console.log('Exercise solution:')

// Solution
let lineNumber = 1

function printComment(
  comment, 
  line = lineNumber++
) { 
  console.log(line, comment)
}

printComment('Commenting on the solution')
printComment('Commenting on the solution again')
printComment('Commenting on the solution and again')

/**
 * Exercise 3 Determine the values written to the console.
 */

function argList(
  productName, 
  price = 100
) { 
  console.log(arguments.length)
  console.log(productName === arguments[0])
  console.log(price === arguments[1])
}

argList( 'Krill Oil Capsules' )

// First it'll output 1, for arguments.length, as only one argument is provided
// Second it'll output 'Krill Oil Capsules'
// Third it'll output 100
// WRONG!!

// 1
// true
// false
// I didn't read the code carefully enough, to see it was printing an equivalence
