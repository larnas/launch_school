function greet(greeting = "Hello") {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                  

/* 
Default parameters are a great way to assign a default value to a parameter. 
This default value is used in case the parameter is undefined, which is 
the case if greet is called without an argument.
*/