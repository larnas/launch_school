// We've been given an array of vocabulary words grouped into sub-arrays by meaning. 
// This is a two-dimensional array or a nested array. Write some code that iterates 
// through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// for loop
for (let i = 0; i < vocabulary.length; i += 1) {
  for (let j = 0; j < vocabulary[i].length; j += 1) {
    console.log(vocabulary[i][j]);
  }
}

// for...of statement 
for (const subArray of vocabulary) {
  for (const word of subArray) {
    console.log(word);
  }
}

/* 
Solution

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}

Our solution uses nested for loops to iterate through each sub-array 
of the vocabulary array. We access each inner element by its index on 
line 11, and output it using console.log().
*/