/*

const obj1 = {
    name:"Rakesh Mondal",
    details:{
        age:30,
        city:"Kolkata"
    }
}

// --------------- SHALLOW COPY -------------- //
const obj2 = {...obj1};

// --------------- DEEP COPY ----------------- //
const obj3 = JSON.parse(JSON.stringify(obj1));


obj2.details.city = "Hyderabad";

console.log(obj1);
console.log(obj2);
console.log(obj3);

*/

const original = {
  name: "Rakesh", // primitive
  address: { city: "Kolkata", lastname: "Mondal" }, // reference
};

const shallow = { ...original }; // Shallow copy

shallow.name = "Mondal"; // new primitive value
shallow.address.city = "Delhi"; // modifies the same nested object
shallow.address.lastname = "Sharma"; // modifies the same nested object

console.log(original.name); // Rakesh (copied by value ✅)
console.log(original); // ❗ Delhi (shared reference ❌)
