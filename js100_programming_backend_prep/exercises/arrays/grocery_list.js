let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

//let tempList = [];
//for (let i = 0; i < groceryList.length; i += 1) {
//  groceryList.slice(i, 1).push(tempList);
//  console.log(groceryList[i])
//}

//for (const item of groceryList) {
//  console.log(item)
//  groceryList.shift()
//}

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

//console.log(tempList);
console.log(groceryList); // []

/* 
The Array.prototype.shift() method removes and returns the first element 
of the calling array. This method permanently modifies the array, which 
can be seen by logging groceryList to the console after removing elements.
*/