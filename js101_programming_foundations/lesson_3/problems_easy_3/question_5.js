/* 
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
*/



function isColorValid1(color) {
  return color === "blue" || color === "green"
} 

const isColorValid2 = (color) => color === "blue" || color === "green"

const isColorValid3 = color => ["blue", "green"].includes(color);


console.log(isColorValid3('blue')); // true
console.log(isColorValid3('red')); // false