/*eslint no-unused-vars: "off"*/

/**
 * In ES5 you can specify default values with a bit of a hack.
 */

function addCalendarEntry(event, date, len, timeout) {
  date = typeof date === 'undefined' ? new Date().getDate : date
  len = typeof len === 'undefined' ? 60 : len
  timeout = typeof timeout === 'undefined' ? 1000 : timeout
}

addCalendarEntry('New meeting')

/**
 * So here we've called addCalendarEntry with one arguemnent.
 * 
 * date wasn't specified, so in the first line of the function, date is assigned a
 * value, based on a ternery operation. If date === undefined, then a new Date() object
 * is initialised and a date retrieved and stored in date. If it's not undefined, then
 * date is set to the value of date, ie the argument passed.
 * 
 * Same for the other 3 arguments. They're essentially whatever was passed in OR the
 * value we set there in the ternery operator. 
 */

/**
 * This can be shortened somewhat by using the || operator: 
 */

function addCalendarEntry1(event, date, len, timeout) {
  date = date || new Date().getDate
  len = len || 60
  timeout = timeout || 1000
}

addCalendarEntry1('New meeting')

/**
 * Here date is checked to be truthy or falsy first, if it passes, the second 
 * part of the || statement is not evaluated; it is an OR statement afterall. 
 * 
 * undefined is evaluated as falsy so this works well. 
 */

/**
 * In es6 default arguments have a unique syntax. The default variables are equivalent
 * to let declarations within the function body.
 */

function addCalendarEntry2(
  event, 
  date = new Date().getDate(), 
  len = 60, 
  timeout = 1000
) {

  // do stuff
}

addCalendarEntry2('New meeting')

/**
 * Use default arguments at the end of the argument list as optional arguments. 
 * 
 * Document their default values
 */

function printArgs() { 
  console.log(arguments)
  console.log(arguments.length)
}

printArgs('first', 'second')