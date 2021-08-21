let getFullName = () => {
  let rlSync = require('readline-sync');
  let firstName = () => rlSync.question("What's your first name?");
  let secondName = () => rlSync.question("What's your last name?");
  console.log(`Hello, ${firstName()} ${secondName()}`);
};

getFullName();

// I add them all in to one function. Need to understant arguments better

// Solution
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
//console.log(`Hello, ${firstName} ${lastName}!`); 