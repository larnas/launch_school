let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // -> [1, 4, 3]

// array2 is assigned to array1,are the same object alocated memory
// when you muted either array effect the other

// solution

// This result demonstrates that array1 and array2 reference the same array: 
// if we change an element using array1, it also changes that element in array2. 

// The opposite is also true: if we change an element in array2, 
// that also changes the element in array1.