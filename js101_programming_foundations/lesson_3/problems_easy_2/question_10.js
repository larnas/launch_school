// Write two one-line expressions to count the number of 
// lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

function countLetters (string) {
  let count = 0;
  for (const letter of string) {
    if (letter === 't')
    count ++
  }
  return count;
}

console.log(countLetters(statement1));
console.log(countLetters(statement2));

// Solution
console.log(statement1.split('').filter(element => element === 't').length);
console.log(statement2.split('').filter(element => element === 't').length);