/*
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
*/

// logs "bar"
// because in code block there is another declaration
// again as a second variable and gets out of scope.

let foo = 'bar';
{
   foo = 'qux';
}

console.log(foo);