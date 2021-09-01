let evenOrOdd = (number) => {
  if (!Number.isInteger(number)) {
    console.log("Please input a valid number") 
  } else if ( number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(5);
evenOrOdd(6);
evenOrOdd("Integer");

// I was trying to valided for characters in the value
// but this method used is better