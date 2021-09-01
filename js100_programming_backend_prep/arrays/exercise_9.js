let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

const numberCheck = (array,number) => {
  result = array.find(value => value === number)
  if (result !== undefined) return console.log('True')
  else return console.log('False')
}

numberCheck(numbers1, 3);
numberCheck(numbers2, 3);
numberCheck(numbers3, 3);

// try ternary operator but faild

// solution
numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);