function isBlank (string) {
  if (string === '' || /\s/.test(string)) return true
  else return false
}

// Solution 

function isBlank2(string) {
  return string.trim().length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

/* 
The String.prototype.trim() method removes whitespaces from both ends of a string. 
Once we removed those whitespaces, we can use the same strategy as in the previous exercise. */