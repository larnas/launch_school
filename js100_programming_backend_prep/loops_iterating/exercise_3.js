let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* 
The problem occurs on line 3 where we assign 1 to counter inside the conditional.
The counter being reassigned over and over again to 1 and never breaks. 
*/