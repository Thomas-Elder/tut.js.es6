
/**
 * In a destructuring expression L = R, we take the right value R, and break it down so 
 * that the new variables in L can be assigned avalue. In the below code, we used the object 
 * property shorthand notation.
 */

let user = {
  name: 'Ashley',
  email: 'ashley@gmail.com',
  lessonsSeen: [2, 5, 6, 7, 9],
  nextLesson: 10
};

console.log(user);

let {email, nextLesson} = user; // this creates email and nextLesson, and assigns them those values from user

console.log();
console.log(email); // = 'ashley@gmail.com'
console.log(nextLesson); // = 10

// It's the equivalent of: 
// let email = user.email
// let nextLesson = user.nextLesson

/**
 * Note that the above two lines are executed in parallel. First, the R value is fully evaluated 
 * before assigning them to left values. For instance, let’s increment the variables a and b 
 * using destructuring:
 */

let [a, b] = [5, 3]; 

[a, b] = [a + 1, b + 1];

console.log(a, b); // a=6 b=4

/**
 * To do that assignment in ES5, could we not just do this?
 */

a = a + 1;
b = b + 1;

console.log(a, b);

// ?? maybe it's just a trivial example to get the idea across. The example above on 17 looks much more useful. 

// Does it need to be in array form for this to work? 

// let c, d = 5, 3; // here 3 causes issues, the comma after 5 makes things fucky. What about an object... 

// let {c, d} = {5, 3}; // here the numbers cause an issue it expects propertyName: 5, perpertyName: 3, or 5:5, 3:3... 

let {c, d} = {5:5, 3:3}; // so this doesn't error... but c and d aren't assigned values. 

console.log(c, d);

let {e, f} = {e:5, f:3}; // this one works. 

console.log(e, f);

/**
 * So the variables you're reading the values into, need to match the name of the object property. 
 */

/**
 * The value of a destructuring assignment of form L = R is R:
 */
console.log({e, f} = {e:5, f:3}); // this prints { e: 5, f: 3 }

/**
 * Destructuring is right-associative, i.e. it is evaluated from right to left. L = M = R becomes L = R, 
 * which in turn becomes R after evaluation. The side effect is that in M and in L, variable assignments 
 * may take place on any depth... 
 * 
 * okay what does that mean?
 */

let user2 = {email, nextLesson} = user;

console.log(user2 === user, user2.name); // true, Ashley

/**
 * Okay so this starts from the RHS evaluating '{email, nextLesson} = user' first.
 * 
 * As above the value of this expression, is the RHS, that is console.log({email, nextLesson} = user) 
 * would print... well let's see,
 */

console.log({email, nextLesson} = user);

/**
 * This prints:
 * { name: 'Ashley',
 *   email: 'ashley@gmail.com',
 *   lessonsSeen: [ 2, 5, 6, 7, 9 ],
 *   nextLesson: 10 }
 * 
 * Right, that's user. 
 * 
 * Ok then user2 is assigned this value, so it's a reference to the same object as user.
 */

let {name} = {email, nextLesson} = user;

console.log(name); // prints Ashley

/**
 * So in this one, the value of '{email, nextLesson} = user' is again, user. 
 * Then we're destructuring further, with the {name} assignment.
 * 
 * It becomes basically:
 * 
 * let {name} = user; 
 */

/**
 * Make sure you use the let key word to initialize new variables. 
 * 
 * You can only destructure an object or an array, if all the variables inside have been declared.
 */