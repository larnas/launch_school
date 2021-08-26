let weather = "rainy"

if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside");
}

// Discussion

// Note that we used the strict equality operator, ===, to determine 
// if weather was 'sunny' or 'rainy'. If both of these comparisons return false, 
// the else branch of our if statement will be executed.