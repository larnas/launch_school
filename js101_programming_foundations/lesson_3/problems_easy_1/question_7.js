// Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";


console.log(str2.slice(0, str2.length -1).includes('Dino'));
console.log(str2.slice(0, str2.length -1).search('Dino'));
console.log(str2.slice(0, str2.length -1).match('Dino'));

// Solution 

console.log(str1.match('Dino') !== null)// false
console.log(str2.match('Dino') !== null) // true

console.log(str1.indexOf('Dino') > -1)// false
console.log(str2.indexOf('Dino') > -1) // true