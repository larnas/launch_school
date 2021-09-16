// Determine whether the following object of people 
// and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

result1 = Object.values(ages).find(element => element === "Spot");

result2 = Object.keys(ages).filter(element => element === "Spot");

result3 = Object.fromEntries(Object.entries(ages).map(element => [element === "Spot"]));


console.log(result1);
console.log(result2);
console.log(result3);

// Answer 
console.log(ages.hasOwnProperty("Spot"));
