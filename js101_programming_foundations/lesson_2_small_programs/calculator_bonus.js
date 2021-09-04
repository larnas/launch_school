const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function calculation () {

  prompt("What is the first number");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmmm...that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What is the second number");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmmm...that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt("What oparetion would you like to performe?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4.");
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

  prompt(`The result is ${output}`);
}

// 
prompt("welcome to The Calculator!");

do {
  calculation ();
  prompt("You want to perform another calculation?\n1) Yes");
  repeat = readline.question();
} while (repeat === '1');

prompt("goodbye!");