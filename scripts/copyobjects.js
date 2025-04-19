/*
// ----------------------- Swallow copy ---------------------- //

const obj1 = {
  name: 'Alice',
  address: {
    city: 'New York',
    zip: '10001'
  },
  skills:["C","C++","Java"]
};

// Creating a shallow copy using Object.assign()
const obj2 = Object.assign({}, obj1);

obj2.name = "John";
//Modify the nested address in obj2
obj2.address.city = 'Los Angeles';

obj1.name = "John";
obj2.skills.push("JavaScript");

console.log("original object",obj1); // 'Los Angeles' - this is also affected because address is a reference
console.log("copied object",obj2); // 'Los Angeles'


// ----------------------- Swallow copy ---------------------- //
*/

// ----------------------- Deep copy ---------------------- //

const obj1 = {
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001",
  },
  skills:[["C","C++","Java"]]
};

// Creating a deep copy using JSON methods
const obj2 = JSON.parse(JSON.stringify(obj1));
obj1.name = "John";
obj1.skills[0].push("JavaScript");
// Modify the nested address in obj2
obj2.address.city = "Los Angeles";

console.log("original object", obj1); // 'New York' - remains unaffected
console.log("copied object", obj2); // 'Los Angeles'


// ----------------------- Deep copy ---------------------- //
