// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

function check (string, char) {
  let array = [];
  array = string.split('')
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === char) {
      return `contains ${char}`
    }
  }
  return `isn't contain ${char}`
}

console.log(check(byteSequence, 'x'));
console.log(check(byteSequence, 'F'));
console.log(check(byteSequence, '6'));
console.log(check(byteSequence, 'T'));
console.log(check(byteSequence, 'P'));

// Solution 

byteSequence.includes('x'); // true