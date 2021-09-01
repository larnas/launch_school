let sumOfSquares1 = (numbers) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue * currentValue
  }
  return numbers.reduce((reducer), 0)
}

// partially successfull 
// read a lot MDN to understand. I want more practice

// solution 
function sumOfSquares2(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares1(array)); // => 83