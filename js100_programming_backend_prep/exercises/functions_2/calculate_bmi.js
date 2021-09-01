function calculateBMI (height, weight) {
  let heightM = height / 100
  bmi = weight / heightM**2
  result =  bmi
  return bmi.toFixed(2);
}
// return string.Math.round(bmi.toFixed(2)* 100) / 100

console.log(calculateBMI(180, 80)); // "24.69"

// The method Number.prototype.toFixed() returns a string 
// that represents a number rounded to a fixed number of decimals.