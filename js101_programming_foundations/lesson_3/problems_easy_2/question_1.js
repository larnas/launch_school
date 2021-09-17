// Given a string, return a new string that replaces every occurrence 
// of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));

// Note that if the string contains two or more occurrences of important, this code only replaces the first. 
// Can you figure out how to replace all occurrences?

console.log(advice.replace(/important/g, 'urgent')); // use regex with aglobal flag

//console.log(advice.replaceAll('important', 'urgent')); // new method in ES2021
