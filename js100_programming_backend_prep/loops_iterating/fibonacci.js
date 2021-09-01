function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number -1) + fibonacci(number -2);
 }

 console.log(fibonacci(6));
 console.log(fibonacci(20));

 /* Very good example explaining Recursion.
 f(6) returns the value of f(5) + f(4).
 f(5) returns the value of f(4) + f(3).
 f(4) returns the value of f(3) + f(2).
 f(3) returns the value of f(2) + f(1).
 f(2) returns the value of f(1) + f(0).
 f(1) returns 1. 
 f(0) returns 0.  */