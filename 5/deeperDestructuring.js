/*eslint no-unused-vars: "off"*/

/**
 * Deeperdestructuring 
 * 
 * It is possible to destructure objects and arrays in any depth. // What does this mean!?
 * 
 * Default values can also be used. // Cool.
 * 
 * Objects or arrays that don’t exist on the right become assigned to undefined on the left. // Cool
 */

let user = {
  name: 'Ashley',
  email: 'ashley@gmail.com',
  lessonsSeen: [2, 5, 6, 7, 9],
  nextLesson: 10
};

let {
  lessonsSeen: [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth = null,
    seventh
  ],
  nextLesson: eighth
} = user;

console.log(first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh);