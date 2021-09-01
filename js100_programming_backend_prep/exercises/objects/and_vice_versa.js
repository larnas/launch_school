// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output: { title: 'Duke', name: 'Nukem', age: 33 }

let obj = Object.fromEntries(nestedArray);

console.log(obj)

// Solution

let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }


let obj2 = {};

for (const key in nestedArray) {
  for (const value in key) {
    console.log(value)
  }
}