Find the MDN documentation on operator precedence, and use it to find out 
which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.

Solution

The MDN page on operator precedence in JavaScript includes a table that tells us 
that the order of the arithmetic operator used in the expression above is as follows:

** > (* and /) > +

This means that when using parentheses for grouping, the expression is equivalent 
to (4 * 5) + ((3 ** 2) / 10), and therefore evaluates to 20.9.

Discussion

Although operator precedence makes an expression like 4 * 5 + 3 ** 2 / 10 unambiguous for the JavaScript engine, using parentheses usually makes an expression with multiple operators much easier for humans to read. For clarity, you should always use the parentheses when mixing operators, e.g.,