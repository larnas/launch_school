let obj = {b: 2,a: 1,c: 3};
let objKeys = Object.keys(obj);
let upperCase = objKeys.map(value => value.toUpperCase());
console.log(upperCase)
console.log(obj)

/* solution 1
let objKeys = Object.keys(obj);
let upperKeys = objKeys1.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }

// solution 2
let upperKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(function(key) {
  upperKeys.push(key.toUpperCase());
});
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
*/