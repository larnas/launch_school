Look up the MDN documentation for the typeof operator. What is its return value? Determine what the following statements will return:

Answer

typeof 23.5;                -> "number" 
typeof 'Call me Ishmael.';  -> "string"
typeof false;               -> "boolean"
typeof 0;                   -> "number"
typeof null;                -> "object"
typeof undefined;           -> "undefined"

Discussion

Take care to read the documentation carefully: typeof returns what you would expect for most primitive types, but note that typeof null returns the string 'object'. This is a historic bug and it's too late to change it without breaking existing code. There's no need to understand the details behind it, it's only important to be aware of the fact that JavaScript will claim null to be an 'object'.