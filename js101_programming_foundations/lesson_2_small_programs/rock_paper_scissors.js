const readline = require('readline-sync');
VALID_CHIOCES = ['rock', 'paper', 'scissors']

function prompt (msg) {
  console.log(`=> ${msg}`);
}

function dislpayWinner(choice, computerChoice) {
  prompt(`You choose ${choice}. Computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You win!');
  } else if ((choice === 'scissors' && computerChoice === 'rock') || 
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'paper')) {
    prompt('Computer won!')
  } else {
    prompt("It's a tie")
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHIOCES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHIOCES.includes(choice)) {
    prompt("Tha's not a valid choice")
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHIOCES.length);
  let computerChoice = VALID_CHIOCES[randomIndex];

  dislpayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)")
  let answer = readline.question().toLowerCase();

  while(answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}