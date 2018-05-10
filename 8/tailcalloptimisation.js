
/**
 * Learn tail call optimisation for writing elgant recursive solutions without the 
 * performance tax ES5 used to give you. 
 * 
 * The function sumToN from stacks.js, can be written in such a way that it can run 
 * with large numbers;
 */

function sumToN(n, sum = 0) {
  if (n <= 1) return sum;

  let result = sum + n;

  return sumToN(n - 1, result);
}

console.time('Recursive sumToN');
console.log('Running for 100000... ');
console.log(sumToN(100000));
console.timeEnd('Recursive sumToN');

// RangeError: Maximum call stack size exceeded
/**
 * Perhaps tail call optimisation is not supported in nodev8.9.4... checking docs.
 * Ok seems like its not supported at the moment, in v8. It's supported in safari, that's it.
 */
