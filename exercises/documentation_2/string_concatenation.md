Find out how we can join two or more strings together.

operator  +
method    concat()

Solution:

Both the String.prototype.concat() method and the + operator concatenate two or more strings, returning a new string.

let firstName = 'Ada';
let lastName = 'Lovelace';

''.concat(firstName, ' ', lastName);
// 'Ada Lovelace'

let firstName = 'Ada';
let lastName = 'Lovelace';

firstName + ' ' + lastName;
// 'Ada Lovelace'