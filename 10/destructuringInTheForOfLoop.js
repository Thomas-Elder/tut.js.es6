
/**
 * If your elements are objects, it is possible to use destructuring inside the for-of
 * loop:
 */

let flights = [
  {source: 'Dublin', destination: 'Warsaw'},
  {source: 'New York', destination: 'Phoenix'}
];

// How I might have done it...
flights.forEach(flight => {
  console.log('Flying from ', flight.source, ' to ', flight.destination);
});

// With for of loop and destructuring... 
for (let {source, destination} of flights)
  console.log('Flying from ', source, ' to ', destination);
