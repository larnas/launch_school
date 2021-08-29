// Below is a simple object representing our dog, Fido. 
// write code to add properties 'age' and 'favorite food' to the fido object.

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age =  2
fido.favorite_food = 'peanut butter'

fido['age'] = 2;                          // Add property 'age'.
fido['favorite food'] = 'peanut butter';  // Add property 'favorite food'.

console.log(fido)

/* 
To define a new object property (or to re-assign the value of an existing property), 
we can again use either dot notation or bracket notation, together with simple 
assignment syntax to set the desired value.

Note that dot notation, however, has restrictions: As soon as the property name 
contains reserved characters like whitespaces, dots, or brackets, we need to 
use bracket notation. That is, while you can write fido.age, you cannot write fido.favorite food.
*/