let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// Write a function that checks whether or not a particular destination is included 
// within destinations, without using the built-in method Array.prototype.includes().

function contains (city, destinations) {
  for (let i = 0; i < destinations.length; i += 1) {
    if (destinations[i] === city) {
      return true
    }
  }
  return false
}

console.log(contains('Nicosia', destinations)); // false
console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

/* 
function contains(element, list) {
  return list.indexOf(element) >= 0;
}

Our first solution iterates over all elements in the input array. 
As soon as an element equals the input string, it returns true. 
If we have iterated over all elements without returning true, it means that 
there is no element that equals the input string and we return false.

Our second solution leverages the built-in method Array.prototype.indexOf(), 
which returns the index of an element in the array, and returns -1 
if the element is not in the array.
*/