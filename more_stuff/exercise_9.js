let value = -0;

//console.log(value); // -> '-0' 

function zeroCheck(value) {

  let newValue = value.toString()
  if (newValue == '-0') {
    console.log('true')
  }else console.log('false')
}

zeroCheck(value);

// Solution 
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}