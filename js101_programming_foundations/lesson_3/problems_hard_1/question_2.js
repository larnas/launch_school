let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);   //  => { first: [1, 2] };

/* 
Since numArray is a reference to the original array, [1], numArray.push(2) modifies this array. 
Thus, the original object referenced by object is changed. 

If, instead of modifying the original object, we want to modify 
numArray but not object, we have two options:

We can declare and initialize numArray with a reference to a copy of the original array: */

let object2 = { first: [1] };
let numArray2 = object2["first"].slice();
numArray2.push(2);

console.log(numArray2); //  
console.log(object2);   //  

// We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:

let object3 = { first: [1] };
let numArray3 = object3["first"].concat();
numArray3.push(2);

console.log(numArray3); //  
console.log(object3);   //   