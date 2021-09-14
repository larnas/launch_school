const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'r', 'paper', 'p', 'scissors', 'sc', 'lizard', 'l', 'spock', 'sp'];

let userScore = 0;
let computerScore = 0;

function prompt (msg) {
  console.log(`=> ${msg}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
         (choice === 'rock' && computerChoice === 'lizard') ||
         (choice === 'paper' && computerChoice === 'rock') ||
         (choice === 'paper' && computerChoice === 'spock') ||
         (choice === 'scissors' && computerChoice === 'paper') ||
         (choice === 'scissors' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'paper') ||
         (choice === 'lizard' && computerChoice === 'spock') ||
         (choice === 'spock' && computerChoice === 'rock') ||
         (choice === 'spock' && computerChoice === 'scissors');
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return 'You win!';
  } else if (choice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }
}

function addScore (winner) {

  if (winner === 'You win!') {
    userScore += 1;
  } else if (winner === 'Computer wins!') {
    computerScore += 1;
  }

}

function grandWinner (userScore, computerChoice) {
  let finalWinner;

  if (userScore === 3) {
    finalWinner = 'User';
  } else if (computerChoice === 3 ) {
    finalWinner = 'Computer';
  }

  return finalWinner;
}

// Game Loop

do  {

  const LINE_SPACE = ' --------------------------- ';

  prompt(`Choose one: ${VALID_CHIOCES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHIOCES.includes(choice)) {
    prompt("Tha's not a valid choice");
    choice = readline.question();
  }

  prompt(`You choose ${choice}. Computer choose ${computerChoice}.`);

  let winner = displayWinner(choice, computerChoice);

  prompt(LINE_SPACE);

  prompt(winner);

  addScore (winner);

  prompt(LINE_SPACE);

  prompt(`The Score is User: ${userScore} Computer: ${userScore}`);

  prompt(LINE_SPACE);

  let finalWinner = prompt(grandWinner (userScore, computerScore));

  let answer;

  if (finalWinner === 'User' || finalWinner === 'Computer') {

    prompt("Would you like to play again? (y/n)");
    answer = readline.question().toLowerCase();

    if (answer !== 'n' && answer !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
  }

} while (answer !== 'y');