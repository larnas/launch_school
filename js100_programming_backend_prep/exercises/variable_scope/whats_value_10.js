const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // -> {firstName: 'Jane', lastName: 'Doe'}

/* 
The fact that const variables cannot be re-assigned does not mean that the value t
hey hold is immutable. As we see in the example above, objects that are assigned 
to const variables can be mutated.

Further Exploration:

One way to make an object immutable is by means of the Object.freeze() method. 
But it's important to note that this is a shallow freeze, meaning it only applies 
to the immediate properties of the object. If the value of those properties 
are objects themselves, they can still be mutated.
*/