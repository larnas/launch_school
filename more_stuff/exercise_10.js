let x = "5"
x = x + 1
console.log(x) // "51"

let y = "5"
y++ 
console.log(y) // 6
console.log(typeof(y)) // ????? but it seems that mutaded variable y

// Solution:
// If you apply ++ to a string, JavaScript coerces it into a number.
// returns the original value of y, not the incremented value.