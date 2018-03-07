
/**
 * Exercise 1: Check the following riddle:
 */

var guessMe1 = 1
let guessMe2 = 2

{
  try { 
    console.log('guessMe1, guessMe2 ', guessMe1, guessMe2 ) // (A)

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
  console.log('Line 37 ', guessMe1 ) // (D)
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

