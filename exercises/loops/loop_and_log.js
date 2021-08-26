for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/*
 0
 2
 4
 6
 8
 10


Discussion

Recall that the general syntactical structure of a for loop looks like this:

for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}

The initialExpression initially assigns i to 0. Then, on each iteration of the for loop, i 
is re-assigned via the incrementExpression. The expression i += 2 in our loop is 
short-hand for i = i + 2, and thus re-assigns i to the current value of i plus 2. 
When the value of i is greater than 10, the condition provided to our for loop 
is no longer true and the loop terminates.
*/