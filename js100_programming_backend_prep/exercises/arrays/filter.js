// Count the number of elements in scores that are 100 or above.
let scores = [96, 47, 113, 89, 100, 102];

// for loop
let count1 = 0;
for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count1 += 1;
  }
}
// fiter method
let count2 = scores.filter(num => num >= 100).length

console.log(count1);
console.log(count2);