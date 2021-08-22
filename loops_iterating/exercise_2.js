let factorial = (num) => {
  let result = 1;
  for (let i = 0; i < num; i++) {
    result = result * (i + 1)
  }
  console.log(result);
}

factorial(5);
factorial(8);

// got confused, tooked some time to solve