function repeat (times, string) {
  let newString = '';
  for (times; times > 0; times -= 1) {
    newString += string
  }
  return newString
}


console.log(repeat(3, 'ha')); // 'hahaha'\

// Solution

function repeat2(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}