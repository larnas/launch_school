function oddLengths1(array) {
  return array.reduce((previousValue, currentValue) => {
    let newArray;
    if (currentValue.length % 2 === 1) {
      newArray.push(currentValue)
    }
    return newArray
  }, [])
}
// close but not there yet

// solution 
function oddLengths2(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths1(arr)); // => [1, 5, 3]