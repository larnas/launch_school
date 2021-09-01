for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}

/*
The above code never terminates, because the condition of the for loop was left empty. 
In this case, JavaScript treats it as true.

One way to terminate the loop from within the body 
is to use the break statement.
*/