// The code provided below will randomly initialize randomNumber 
// to either 0 or 1 each time it is executed.

let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes')
} else {
  console.log('No')
}

/*
Discussion:

Recall that that 0 is falsy in Javascript, while 1 is truthy. Our if statement 
will execute the code on line 4 if the condition provided on line 3 (randomNumber) 
is truthy; otherwise it will execute the code on line 6.

Alternatively, you could have used as conditions 
if (randomNumber === 0) and if (randomNumber === 1). 
Just remember to make it a habit to use strict equality ===.
*/