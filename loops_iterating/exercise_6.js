/*
let factorial = (num) => {
  let result = 1;
  for (let i = 0; i < num; i++) {
    result = result * (i + 1)
  }
  console.log(result);
}
*/

let factorial = (num) => {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
} 

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));