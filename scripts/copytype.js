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