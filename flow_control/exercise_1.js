false || (true && false); // -> false 
true || (1 + 2); // -> true
(1 + 2) || true; // -> 3
true && (1 + 2); // -> 3
false && (1 + 2); // -> false
(1 + 2) && true; // -> false
(32 * 4) >= 129; // -> false
false !== !true; // -> false
true === 4; // -> false
false === (847 === '847'); // -> true
false === (847 == '847'); // -> false

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; 
(!true || (false === 20) || (82 === 82)) || false;
(!true || false || true) || false;
true || false; // -> true

// overall was fine, need to revisite and work on AND and OR operators