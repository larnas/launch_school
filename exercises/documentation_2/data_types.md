Without looking into your notes, try to remember which primitive data types are defined in JavaScript. Then find this information on MDN.

Solution:

There are seven primitive data types:

Number
BigInt
Boolean
String
Symbol
null
Undefined

Note that Symbol was added only in ES6, and BigInt was introduced in ES9. We do not discuss either type in this course.

You may see occasional references to null being an object, even on MDN. But, even there, you will also find statements that say it is primitive type. The history and behavior of null is somewhat confusing, but, for our purposes, it is a primitive type.

Discussion:
In addition to the primitive data types, JavaScript has one non-primitive type: Object (which also comprises arrays). The main difference is that values of a primitive type are immutable. That is, there is no way to change values like 47, 'Launch School', or true, while you can change non-primitive values like arrays, e.g. by adding or removing elements.