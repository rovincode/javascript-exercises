const sumAll = function (a, b) {
  let checkA = Number.isInteger(a);
  let checkB = Number.isInteger(b);
  let result = 0;

  if (a >= 0 && b >= 0 && checkA == true && checkB == true) {
    let max = 0;
    let min = 0
    if (a > b) {
      max = a;
      min = b;
    } else {
      max = b;
      min = a;
    }
    for (i = min; i < max + 1; i++) {
      result += i;
    }
  } else {
    console.log("the input number is invaild, either its string or number");
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
