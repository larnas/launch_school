function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); // 'hi there'
console.log(second()); // undefined

/* 
The reason for this odd behavior is that semicolons, in JavaScript, are technically optional. 
However, when you omit them, the JavaScript engine inserts them where it thinks you need them. 

In second, it inserts a semicolon after the word return, so the function returns undefined. 
No errors are thrown since the rest of the code is valid, even though it never gets executed.

Some developers rely on this behavior and write JavaScript code without semicolons. However, 
most developers consider it poor practice since you're relying on the engine to make decisions for you, 
and those decisions may not be what you intended.
*/