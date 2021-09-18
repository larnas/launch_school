let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let str = munstersDescription.split('');
let str2 = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase()) {
    str2 += str[i].toUpperCase()
  }else {
    str2 += str[i].toLowerCase()
  }
}

console.log(str2);


munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(munstersDescription);