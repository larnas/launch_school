let allCaps = (word) => {
  if (word.length >= 10) {
      word.toUpperCase();
  } else {
      word;
  }
  console.log(word);
}

function capsLong(string) {
   ((string.length > 10) ? string.toUpperCase() : string);
   console.log(string);
}

allCaps('hello world');
allCaps('goodbye');

capsLong('hello world');
capsLong('goodbye');