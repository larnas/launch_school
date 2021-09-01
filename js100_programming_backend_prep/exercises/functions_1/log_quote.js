brendanEichQuote();
// logs:
// Always bet on JavaScript.

function brendanEichQuote (quote = 'Always bet on JavaScript.' ) {
  console.log(quote);
}

function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
}

// Since the function has no return statement, 
// the return value of our function is undefined.