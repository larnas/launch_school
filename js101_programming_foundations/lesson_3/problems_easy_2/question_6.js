let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general. 
// We'll explore this in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but in an un-nested format:


let newArray1 = flintstones.flat()

let newArray2 = flintstones.reduce((acc, val) => acc.concat(val), []);

let newArray3 = () => [].concat(...flintstones);

console.log(newArray1);
console.log(newArray2);
console.log(newArray3());

flintstones = [].concat(...flintstones);
console.log(flintstones);

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
console.log(newFlintstones);