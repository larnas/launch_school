let rlSync = require('readline-sync');
let age = Number(rlSync.question("What's your age?\n")); 

for (let i = 10; i < 41; i += 10 ) {
  if (i === 10) console.log(`You are ${age} years old.`)
  else console.log(`In ${i} years, you will be ${age + i} years old.`);
}

