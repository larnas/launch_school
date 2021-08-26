Find out whether JavaScript has a method to lowercase a string, for example converting 'Aloha, World!' into 'aloha, world!.

Answer
string.toLowerCase()

Solution
'Aloha, World!'.toLowerCase(); // 'aloha, world!'

You might notice that there is an additional method String.prototype.toLocaleLowerCase(), which is relevant for alphabets in which the case mapping is not as straightforward as in English. But as long as we don't work with a language where this is the case, toLowerCase() is the straightforward choice.