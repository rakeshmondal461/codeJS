/*

const radiuses = [5, 3, 8, 4];

function calculateAreaOfCircle(value) {
  const cval = Math.PI * (value * value);
  return cval;
}

function calculateCircumferenceOfCircle(value) {
  const cval = 2 * Math.PI * value;
  return cval;
}

function calculateDiameterOfCircle(value) {
  const cval = 2 * value;
  return cval;
}

// A higher-order function is a function that takes another function as an argument
const calculate = (values, logic) => {
  const results = [];
  for (let i = 0; i < values.length; i++) {
    results[i] = logic(values[i]);
  }
  return results;
};
// A higher-order function is a function that takes another function as an argument


const areasOfCircle = calculate(radiuses, calculateAreaOfCircle);

const circumferencesOfCircle = calculate(
  radiuses,
  calculateCircumferenceOfCircle
);

const diametersOfCircle = calculate(radiuses, calculateDiameterOfCircle);

console.log("areasOfCircle 🔴", areasOfCircle);
console.log("circumferencesOfCircle 🟢", circumferencesOfCircle);
console.log("diametersOfCircle 🔵", diametersOfCircle);

*/

//A higher-order function is a function that returns a function as its result

function a(num1){
    return function(num2){
        return num1+num2;
    }
}

const res = a(5)(7);

console.log(res);

//A higher-order function is a function that returns a function as its result
