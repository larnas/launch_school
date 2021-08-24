// Which of the following values are valid keys for an object?
1
'1' // valid
undefined
'hello world' // valid
true
'true' //valid



// solution
// All the listed values are valid keys. 

// Note, though, that JavaScript coerces the non-string key values to strings. 
// Given the listed values, 1 and '1' represent the same key, as do true and 'true'. 
// This equivalency will bite you at some point; it's inevitable, so be ready.