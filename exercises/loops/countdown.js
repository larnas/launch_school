for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}
console.log('Launch!');

/*
Discussion

In our solution code, we initialize i to 10, and decrement i by 1 on each iteration, 
using the short-hand expression i -= 1. Once i is equal to 0, the condition provided 
to our for loop is false and the loop terminates. Finally, we log 'Launch!'.

There are different ways to achieve this behavior. For example, you could 
also use i >= 0 as condition and then check whether i reached the value of 0 
inside the loop, in order to determine whether to log the number or 'Launch!'.
*/