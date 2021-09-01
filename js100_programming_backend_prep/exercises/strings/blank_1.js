// Write a function that checks whether a string is empty or not. For example:

function isBlank (string) {
  if (string === '') return true
  else return false
}

// Solution 

function isBlank2(string) {
  return string.length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

/* 
A string is empty if it does not contain any characters. 
The easiest way to check this is to look at the length of the string. */