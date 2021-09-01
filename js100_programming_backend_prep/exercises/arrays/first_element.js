// Write a function that returns the first element of an input array. For example:

function first (array) {
  return array[0];
}

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

/* With this implementation, first returns undefined if the input array is empty. 
It is the same behavior you get for trying to access an index 
that is outside the bounds of the array. */