const removeFromArray = function (arr, x) {
  let result = [];

  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] != x) {
      result.push(arr[i])
    } else {
      console.log("idk... x found and skip??")
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
