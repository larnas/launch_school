const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';


function message(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let msg = message(key, LANGUAGE);
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function getData () {

  prompt("firstNumber");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("nvalidNum");
    number1 = readline.question();
  }

  prompt("secondNumber");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("invalidNum");
    number2 = readline.question();
  }

  prompt("operation");
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt("invalidOperation");
    operation = readline.question();
  }

  return [number1, number2, operation];
}

function calculation () {
  const [firstNum, secondNum, operator] = getData();
  let output;

  switch (operator) {
    case '1':
      output = Number(firstNum) + Number(secondNum);
      break;
    case '2':
      output = Number(firstNum) - Number(secondNum);
      break;
    case '3':
      output = Number(firstNum) * Number(secondNum);
      break;
    case '4':
      output = Number(firstNum) / Number(secondNum);
      break;
  }

  console.log(`The result is ${output}`);
}

//
prompt("welcome");

do {
  calculation();
  prompt("repeatCal");
} while (readline.question() === '1');

prompt("goodbye");

// Function 'getData' has too many lines (21). Maximum allowed is 20
// Function 'getData' has too many statements (16). Maximum allowed is 15