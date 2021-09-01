// reduce method
let strings = ['a', 'b', 'c', 'd']
let upStrings = strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase()
 }, '')
console.log(upStrings);

// reverse mothod without destruction of array
let numbers = [1, 2, 3, 4]
console.log(numbers.slice().reverse());
console.log(numbers);