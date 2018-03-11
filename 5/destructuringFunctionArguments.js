/*eslint no-unused-vars: "off"*/

/**
 * The arguments in a function signature act as left values of destructuring assignments. 
 * 
 * The parameters of a function call act as the respective right values of destructuring assignments.
 */

function f (L1, L2) {

}

let R1, R2;

f(R1, R2); // executes L1 = R1, L2 = R2

/**
 * Ooooohkay, so does that mean I can do...
 */

let user = {
  name: 'Tom',
  email: 'email@email.com'
};

function foo (name, email) {
  console.log(name);
  console.log(email);
}

foo(user);

// Apparently not, prints {} and undefined...