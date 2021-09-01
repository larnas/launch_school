let alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(alphabet.split(''));

Array.from(alphabet);

/* 
Discussion

When String.prototype.split() is used with an empty string as separator, 
it splits the string it is invoked on between each character. (To be precise, 
it splits the string between each UTF-16 code unit, which in our case amounts to the same thing.)

An alternative is to use Array.from();

The Array.from() static method creates a new, shallow-copied Array instance 
from an array-like or iterable object. 
*/