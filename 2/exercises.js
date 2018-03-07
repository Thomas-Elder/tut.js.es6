
/**
 * Exercise 1: Check the following riddle:
 */

var guessMe1 = 1
let guessMe2 = 2

{
  try { 
    //console.log('guessMe1, guessMe2 ', guessMe1, guessMe2 ) // (A)

    /**
     * guessMe1 should be 1
     * guessMe2 should throw an error
     * 
     * BECAUSE it is declared further down, and this area is in the 'temporal dead zone'
     */

  } catch( _ ) {
    console.log(_)
  }

  let guessMe2 = 3
  console.log('Line 23 ', guessMe1, guessMe2 ) // (B)
  /**
   * guessMe1 should be 1
   * guessMe2 should be 3
   */
}

console.log('Line 30 ', guessMe1, guessMe2 ) // (C)
/**
 * guessMe1 should be 1
 * guessMe2 should be 2
 */

var foo = () => {
  //console.log('Line 37 ', guessMe1 ) // (D)
  /**
   * guessMe1 should be 1 wrong!
   * guessMe1 is undefined here;
   * but why isn't it available from enclosing scope?
   * 
   * Ok so, when there's a declaration in the function of a new var, even though it's the
   * same name as the one declared outside function scope, it is used instead of the "global" var.
   * 
   * So the parser would see the var guessMe1 declaration, hoist it, then attempt to
   * pass that value to the consolelog function, but realise that it hasn't been 
   * initialised yet. 
   * 
   * Note if there was no var guessMe1 declaration in the function scope, there wouldn't
   * be an error, the console would've logged the value 1, assigned line 6
   */
  var guessMe1 = 5
  let guessMe2 = 6
  console.log('Line 43 ', guessMe1, guessMe2 ) // (E)
  /**
   * guessMe1 should be 5
   * guessMe2 should be 6
   */
}

foo()

console.log('Line 52 ', guessMe1, guessMe2 )// (F)
/**
 * guessMe1 should be 1
 * guessMe2 should be 2
 */

// Quick test...
var test = 5
console.log('after test dec ', test)

function testf() {
  var test = 5
  test++
  console.log('inside testf ', test)
}

testf()
console.log(test)

// Further testing...
let test1 = 5
console.log('after test1 dec ', test1)

{
  try {
    //let test1 = 5
    test1++
    console.log('inside testf1 ', test1)
  } catch (e) {
    console.log(e)
  }
}

//testf1()
console.log(test1)


/**
 * Exercise 2: Modify the code such that all six console logs print out their 
 * values exactly once, and the printed values are the following:
 * 1 3 
 * 1 3 
 * 1 2 
 * 5 
 * 5 6 
 * 1 2
 * You are not allowed to touch the console logs, just the rest of the code.
 */

var guessMe3 = 1
let guessMe4 = 2

{
  let guessMe4 = 3 // moved this above the first log to avoid error

  try { 
    console.log('line 122 ', guessMe3, guessMe4 ) // (A)
  } catch( _ ) {
    console.log(_)
  }

  console.log('Line 127 ', guessMe3, guessMe4 ) // (B)
}

console.log('Line 130 ', guessMe3, guessMe4 ) // (C)

var bar = () => {
  var guessMe3 = 5 // moved this above the log to avoid undefined

  console.log('Line 135 ', guessMe3 ) // (D)
  
  let guessMe4 = 6
  console.log('Line 138 ', guessMe3, guessMe4 ) // (E)
}

bar()

console.log('Line 143 ', guessMe3, guessMe4 )// (F)

/**
 * Exercise 3: Add the linter of your choice to your text editor or IDE. 
 * Configure your linter such that you never have to worry about leaving a 
 * temporal dead zone unnoticed. 
 */

// Have added the 'no-use-before-define' rule to eslintrc.json