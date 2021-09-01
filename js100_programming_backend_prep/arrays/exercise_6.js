/*
let oddLengths = (array) => array.map(array.filter(value => {
    for (let i = 0; i < ; i++) {
      if ()
      return value
    }
  }))
*/
//(array) => array.map(element => array.filter(value => value.length% 2 == 1));
//console.log(oddLengths())
//let oddLengths1 = (array) => array.filter((number) => number % 2 === 1)
//  let number = () => number.map((value) => value.length)


// it's the first exercice failed to solve

// solution 

function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab']
console.log(oddLengths(arr)); // => [1, 5, 3]