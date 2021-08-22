let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
// while loop
/* 
let index = 0
while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}*/
// for loop
for (let index = 0; index < names.length; index++) {
  if (names[index] === 'Naveed') continue; // -> jumps to next iteration without adding 'NAVEED'
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName); 
}

console.log(upperNames);