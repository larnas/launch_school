const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(value) {
  return Number(value) <= 0 || Number.isNaN(Number(value));
}
//value.trim() === '' ||

function getLoanAmount (loanAmount) {
  prompt("What is your loan amount?");
  loanAmount = Number(readline.question());

  while (invalidNumber(loanAmount)) {
    prompt("Enter a valid (Positive) number.");
    loanAmount = Number(readline.question());
  }
  return loanAmount;
}

function getAPR (annualPercentageRate) {
  prompt("What is the Annual Percentage Rate (APR)?");
  annualPercentageRate = Number(readline.question());

  while (invalidNumber(annualPercentageRate)) {
    prompt("Enter a valid (Positive) number.");
    annualPercentageRate = Number(readline.question());
  }
  return annualPercentageRate;
}

function getDurationYears (loanDurationYears) {
  prompt("What is the duration of loan (in Years)?");
  loanDurationYears = Number(readline.question());

  while (invalidNumber(loanDurationYears) ||
        (Number.isInteger(Number(loanDurationYears))) === false) {
    prompt("Enter a valid (an Integer) number.");
    loanDurationYears = Number(readline.question());
  }
  return loanDurationYears;
}

do {
  prompt('Welcome to Loan Calculator!');
  console.log(" ------------------------ ");

  let loanAmount = getLoanAmount();
  let annualPercentageRate = getAPR();
  let loanDurationYears = getDurationYears();

  let loanDurationMonths = loanDurationYears * 12;
  let monthlyInterestRate = (annualPercentageRate / 100) / 12;

  let monthlyPayment = loanAmount *
              (monthlyInterestRate /
              (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  console.log("=> You're monthly payment is: " + "$" + (monthlyPayment).toFixed(2));

  console.log(" ------------------------ ");
  prompt("Another calculation?\n=> If Yes, please enter 'y' / If No, any other key.");
} while (readline.question() === 'y');