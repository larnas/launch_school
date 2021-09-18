let msg = "The Flintstones Rock!"
let space = ' ';

for (let i = 0; i < 10; i++) {
  console.log(space + msg);
  space += ' '
}

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}