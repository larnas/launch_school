// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');
console.log(flintstones);

//  Alternate Solution

let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones2 = flintstones2.concat("Dino");
console.log(flintstones2); // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

let flintstones3 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones3[flintstones3.length] = "Dino";
console.log(flintstones3); // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]