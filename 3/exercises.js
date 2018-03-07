
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