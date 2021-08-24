// for loop method
let findIntegers1 = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    if (Number.isInteger(array[i]) === true) {
      newArray.push(array[i])
    }
  }
  return newArray
}

// filter method
let findIntegers2 = (array) => array.filter(value =>  Number.isInteger(value));
// I got a bit confused with how to callback functions

// solution 
function findIntegers3(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers2(things);
console.log(integers); // => [1, 3, -4]