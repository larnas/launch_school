let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
/*
true && (false || true);
true && true
true
Discussion

The provided code uses the logical or operator ||, which checks whether at 
least one of its operands is truthy, and the logical and operator &&, which 
checks whether both its operands are truthy.

In the above code, the operands are comparisons with the following values:

brakingForce < acceleration // true
speed > 0                   // false
acceleration > 0            // true

Therefore, our logical expression breaks down to true && (false || true). 
Since false || true evaluates as true and true && true evaluates as true as well,
the value of isMoving is true.
*/