let obj = { number: 1, string: 'abc', array: [1, 2, 3] };

let objCopy = clone(obj);
console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

objCopy.number = 2;
objCopy.string = 'xyz';
objCopy.array.push(4);
console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }


function clone(obj) {
  return Object.assign({}, obj)
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

/* Solution 

function clone(obj) {
  return Object.assign({}, obj);
}

There are different ways to clone an object. The arguably easiest one 
is to use the Object.assign method. Note that this method only creates a shallow copy, 
which means that if you mutate one of the values in person, they will be mutated 
in clonedPerson as well. For example:

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false
*/