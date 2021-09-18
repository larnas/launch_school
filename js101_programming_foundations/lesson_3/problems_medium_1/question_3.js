function factors(number) {
  let divisor = number;
  let factors = [];
 
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(-5));

/* Bonus: What is the purpose of number % divisor === 0 in that code?

It determines whether the result of the division 
is an integer -- if the number has no remainder, the result is an integer, 
so the number divided by the divisor is a factor. */