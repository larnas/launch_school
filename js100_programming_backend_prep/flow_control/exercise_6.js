function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); // -> 'Not empty'

// it can't evaluate that array is actual empty?
// has no elements and the length property is 0 -- it isn't falsy