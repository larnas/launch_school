function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

// My Solution
function isDotSeparatedIpAddress1(inputString) {
  let dotSeparatedWords = inputString.split(".");

  while (dotSeparatedWords.length === 4) {
    let word = dotSeparatedWords.pop();
    if (isAnIpNumber(word)) {
      return true;
    }
  }
  return false
}

// Solutions Provided
function isDotSeparatedIpAddress2(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

function isDotSeparatedIpAddress3(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

/* console.log(isDotSeparatedIpAddress1("4.5.5"));
console.log(isDotSeparatedIpAddress1("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress1("1.2.3.4")); */

/* console.log(isDotSeparatedIpAddress2("4.5.5"));
console.log(isDotSeparatedIpAddress2("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress2("1.2.3.4")); */

console.log(isDotSeparatedIpAddress3("4.5.5"));
console.log(isDotSeparatedIpAddress3("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress3("1.2.3.4"));