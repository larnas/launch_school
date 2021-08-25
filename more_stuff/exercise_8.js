function isNotANumber2(value) {
  let str = value.toString()
  let element = str.split(' ')
  let numbers = ['1','2','3','4','5']
  for (let i = 0; i < str.length; i++) {
    if (element === numbers[i])
    return 'true'
    else return 'false'
  }
}

function isNotANumber(value) {
  return value !== value;
}

// This works since NaN is the only JS value that is not === to itself.

//console.log(Number.isNaN(NaN));
console.log(isNotANumber(NaN));
console.log(isNotANumber(null));
console.log(isNotANumber(undefined));
console.log(isNotANumber('String'));
console.log(isNotANumber(5));
console.log(isNotANumber(1));

let num = 5
console.log(num.toString())