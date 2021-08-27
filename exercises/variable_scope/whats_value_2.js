console.log(greeting); // -> error

let greeting = 'Hello world!';

/* 
Solution:

ReferenceError: Cannot access 'greeting' before initialization

In contrast to var variables, let variables are not accessible before they are declared. 
For that reason the above code raises an error. */