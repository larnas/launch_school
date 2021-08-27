console.log(greeting); // -> undefined

var greeting = 'Hello world!';

/*
Discussion

All variables in JavaScript declared with var are hoisted, 
meaning they are virtually moved to the beginning of the scope. 
This means that our code snippet above behaves like the following one: 

var greeting;

console.log(greeting);

greeting = 'Hello world!'

When a var variable is declared but not assigned a value, 
like on line 1, it is initialized to the value undefined. 
For that reason, the code logs undefined to the console.
 */