/*

const property = "firstName";
const name = "Rakesh";

const user = {
  [property]: name, // we can set value of variable as property using []
};

//console.log(user);
//
// Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

function multiplyByTwo(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyByTwo(nums);
console.log(nums);
console.log(JSON.stringify(nums,["a","title"]))


let aobj = {
    name:"Test",
    age:22
}

let b = aobj;
aobj = null;

*/

// --------------- CLONE OBJECT USING Object.assign --------------- //

const user1 = {
  name: "Peter Parker",
  age: 56,
};

const user2 = Object.assign({}, user1);

user1.name = "Miles morales";
console.log(user1);
console.log(user2);
