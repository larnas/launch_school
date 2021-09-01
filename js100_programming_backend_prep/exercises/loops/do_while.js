let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

let counter2 = 0;

do {
  console.log('Woooot!');
  counter2 -= 1;
} while (counter2 > 0);


/*
the difference between them is the position of the statement
in first is on before the execution of code block starts
and for second it just start and st the end determine when the loop will end

Solution:

Both statements execute the given block as long as the condition evaluates to true. 
The difference is that the condition in a while statement is checked before executing 
the block, while the condition in a do...while statement is checked after the block has 
been executed. So the block in a do...while statement will always be executed at least 
once, even if the condition is not satisfied.

Therefore the second code snippet logs 'Woooot!' once, while the first code snippet 
does not log anything.
*/