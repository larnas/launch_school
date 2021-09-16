const readline = require('readline-sync');

const VALID_CHOICES = {
  rock: { shorthand: 'r', beats: ['scissors', 'lizard'] },
  paper: { shorthand: 'p', beats: ['rock', 'spock'] },
  scissors: { shorthand: 'sc', beats: ['paper', 'lizard'] },
  lizard: { shorthand: 'l', beats: ['spock', 'paper'] },
  spock: { shorthand: 'sp', beats: ['scissors', 'rock'] },
};

const MAX_SCORE = 3;
let score = { player: 0, computer: 0 };

function prompt (msg) {
  console.log(`=> ${msg}`);
}

function displayEmptyLine () {
  console.log( "\n" );
}

function getComputerChoice () {
  let randomIndex = Math.floor(Math.random() *
                    Object.keys(VALID_CHOICES).length);
  return Object.keys(VALID_CHOICES)[randomIndex];
}

function getPlayerChoice (choice) {
  choice = readline.question();

  for (let key in VALID_CHOICES) {
    if (VALID_CHOICES[key].shorthand === choice) {
      return key;
    }
  }

  return choice;
}

function playerWins(playerChoice, computerChoice) {
  return VALID_CHOICES[playerChoice].beats.includes(computerChoice);
}

function decideWinner(playerChoice, computerChoice) {
  if (playerWins(playerChoice, computerChoice)) {
    return 'Player';
  } else if (playerChoice === computerChoice) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function addScore (winner) {
  if (winner === 'Player') {
    score.player += 1;
  } else if (winner === 'Computer') {
    score.computer += 1;
  }
}

function resetScore () {
  score = { player: 0, computer: 0 }
}

while (true) {

  let computerChoice = getComputerChoice();

  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(', ')}`);

  let playerChoice = getPlayerChoice();

  while (Object.keys(VALID_CHOICES).includes(playerChoice) === false) {
    prompt("Tha's not a valid choice");
    playerChoice = getPlayerChoice();
  }

  prompt(`The Player choose ${playerChoice} against ${computerChoice}.`);

  let winner = decideWinner(playerChoice, computerChoice);

  if (winner === 'Player' || winner === 'Computer') {
    prompt(`The Winner is ${winner}`);
  } else {
    prompt("The game is Tie");
  }

  addScore(winner);

  prompt(`The Score is Player: ${score.player} - ${score.computer} :Computer`);

  displayEmptyLine()

  if (score.player ===  MAX_SCORE || score.computer === MAX_SCORE ) {

    prompt("Would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();

    while (answer !== 'n' && answer !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer === 'y') ; resetScore()
    if (answer !== 'y') break;
  }
}