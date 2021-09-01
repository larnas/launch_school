console.log(squaredNumber(3)); // 9

function squaredNumber(num) {
  return num ** 2;
}

function squaredNumber(num) {
  return num * num;
}

/*
Our solution uses the exponentiation operator (**) 
to multiply our parameter num by the power of 2. 
Because squaring a number is the equivalent of multiplying 
the number by itself, the below solution would also be valid:

Note that in order to return the squared number from our function 
we must use an explicit return statement. Otherwise, the return value 
of our function squaredNumber would be undefined.
*/