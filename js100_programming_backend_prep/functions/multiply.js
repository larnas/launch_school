

let getNumber = (firstNumber,secondNumber) => {
  let rlSync = require('readline-sync');
  firstNumber = rlSync.question('Enter the first number:');
  secondNumber = rlSync.question('Enter the second number:');
  let result = firstNumber * secondNumber
  console.log(`${firstNumber} * ${secondNumber} = ${result}`);
}

getNumber();

// A lot better and easier this time. Start to getting it
// I am just putting them all in one function which probably is not good

// Solution 
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
//console.log(`${left} * ${right} = ${multiply(left, right)}`);