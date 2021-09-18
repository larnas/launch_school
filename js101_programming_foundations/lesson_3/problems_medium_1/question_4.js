function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Is there a difference between these implementations, other than 
// the method she used to add an element to the buffer?

let buff = [1, 2, 3, 4];
let maxSize = 4;
let newElem = 5;

console.log(addToRollingBuffer1(buff, maxSize, newElem));
console.log(addToRollingBuffer2(buff, maxSize, newElem));

/* Yes, there is a difference. While both methods have the same return value, 
the first implementation mutates the argument represented by buffer. 
That is, the caller will see that the array is different when the function returns. 
The rollingBuffer2 implementation doesn't mutate the argument specified
by the value of buffer. */