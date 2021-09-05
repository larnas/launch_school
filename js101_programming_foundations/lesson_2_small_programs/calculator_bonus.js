const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')
const LANGUAGE = 'en';


function message(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let msg = message(key, LANGUAGE)
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function calculation () {

  prompt("firstNumber");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages("nvalidNum"));
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

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is ${output}`);
}

// 
prompt("welcome");

do {
  calculation ();
  prompt("repeatCal");
  repeat = readline.question();
} while (repeat === '1');

prompt("goodbye");