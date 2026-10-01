const convertToCelsius = function (fahreinheit) {
  let result = (fahreinheit - 32) / (9 / 5);
  return result;
};

const convertToFahrenheit = function (celcius) {
  let result = celcius * (9 / 5) + 32;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
