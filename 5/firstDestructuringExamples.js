
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

console.log(a, b);