function filter(input) {
  console.log(Array.isArray(input));
}
let num = 12;
let array = [1, 2, 3];
let string = 'Stavros';
let obj = {name: 'George'};

filter(num);
filter(array);
filter(string);
filter(obj);

/* 
Solution

You can use the Array.isArray() method.

Note that the typeof operator returns 'object' for arrays, because arrays are objects. 
Therefore it does not distinguish between arrays and other objects.
*/