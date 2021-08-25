let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches (array,regex) {
  let matchArray = [];
  for (const element of array) {
    if (regex.test(element) === true) {
      matchArray.push(element)
    }
  }
  return matchArray
}

console.log(allMatches(words, /lab/)) // => ['laboratory', 'flab', 'elaborate']

// solution 1
function allMatches1(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}

// Solution 2
function allMatches2(words, pattern) {
  return words.filter((word) => pattern.test(word));
}