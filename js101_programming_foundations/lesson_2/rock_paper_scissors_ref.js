const readline = require('readline-sync');
const VALID_CHIOCES = ['rock', 'paper', 'scissors']

function prompt (msg) {
  console.log(`=> ${msg}`);
}

function dislpayWinner(choice, computerChoice) {
  prompt(`You choose ${choice}. Computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    return 'You win!';
  } else if ((choice === 'scissors' && computerChoice === 'rock') || 
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'paper')) {
      return 'Computer won!';
  } else {
    return "It's a tie";
  }
}

do {
  prompt(`Choose one: ${VALID_CHIOCES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHIOCES.includes(choice)) {
    prompt("Tha's not a valid choice")
    choice = readline.question();
  }

  let randomIndex = Math.round(Math.random() * (VALID_CHIOCES.length - 1));
  let computerChoice = VALID_CHIOCES[randomIndex];

  prompt(dislpayWinner(choice, computerChoice));

  prompt("Would you like to play again? (y/n)")
  answer = readline.question().toLowerCase();

  if (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

} while (answer === 'y');