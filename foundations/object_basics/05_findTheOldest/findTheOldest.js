const findTheOldest = function (arr) {
  let arrContainer = [];
  for (i = 0; i < arr.length; i++) {
    arrContainer.push(arr[i]);
  }
  let dateNow = new Date();


  for (i = 0; i < arrContainer.length; i++) {
    if (isNaN(arrContainer[i].yearOfDeath) == true) {
      var addAge = dateNow.getFullYear() - arrContainer[i].yearOfBirth;
      arrContainer[i].age = addAge;
    } else {
      var addAge = arrContainer[i].yearOfDeath - arrContainer[i].yearOfBirth;
      arrContainer[i].age = addAge;
    }
  }

  let count = 0;
  let theOldest = [{
    name: "nohuman",
    age : 0,
  }];
  while (count < arrContainer.length) {
    if (theOldest[0].age < arrContainer[count].age) {
      theOldest[0].name = arrContainer[count].name;
      theOldest[0].age = arrContainer[count].age;
      count++;
    } else {
      count++
    }
  }


  return theOldest[0].name;
}

// Do not edit below this line
module.exports = findTheOldest;
