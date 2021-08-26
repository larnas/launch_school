// Loop over the elements of the array fish, logging each one. 
// Terminate the loop immediately after logging the string 'Nemo'.
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for loop
for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}

// do..while loop
let j = 0;
  do  {
    j += 1;
    console.log(fish[j]);

  } while (fish[j] !== 'Nemo');
  
/*
Discussion:
When iterating over an array, it is a common pattern to loop over all indices 
in the array and access the elements one by one using the current index.

Because arrays are zero-indexed, there are two points that require care: 
The start index needs to be 0. And you need to terminate before you reach 
fish.length, because the last index is fish.length - 1.
*/