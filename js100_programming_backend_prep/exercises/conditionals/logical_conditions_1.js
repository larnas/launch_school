if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}
 /*

if statement evaluates to truthy 
it allways log "Yes"

Discussion

The condition provided to our if statement uses the logical or operator ||. 
Therefore the condition will evaluate to a truthy value if either one 
of its operands is truthy. Since true is truthy, the condition will always
be truthy as well.
*/