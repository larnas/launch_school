// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

numbers = [];
numbers.length = 0;
numbers.splice(0)

while (numbers.length) {
 numbers.pop();
}

for (let i = 0; i = numbers.length ; i++) {
  numbers.shift();
}

console.log(numbers);
