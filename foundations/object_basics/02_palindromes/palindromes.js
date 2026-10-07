const palindromes = function (word) {
  let delSpace = word.split(" ").join();
  let arrOne = [];
  let arrTwo = [];

  for (i = 0; i < delSpace.length; i++) {
    arrOne.push(delSpace.charAt(i));
    arrTwo.unshift((delSpace.charAt(i)))
  }

  let checkCount = 0;
  let checkResult;
  while (checkCount < arrOne.length) {
    if (arrOne[checkCount] != arrTwo[checkCount]) {
      checkResult = false;
      break;
    } else {
      checkResult = true;
      checkCount++;
    }
  }


  return checkResult;
};


// Do not edit below this line
module.exports = palindromes;
