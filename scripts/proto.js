// ----------------- Inherit using Object.create ----------------- //

/*

const superadmin = {
  firstName: "Rakesh",
  lastName: "Mondal",
  showfullName() {
    console.log(`Full name is: ${this.firstName} ${this.lastName}`);
  },
};

const admin = Object.create(superadmin);
admin.firstName = "Prakash";
admin.lastName = "Maity";

const user = Object.create(admin);
user.firstName = "Ramprasad";
user.lastName = "Mondal";

user.showfullName(); // Output: Full name is: Ramprasad Mondal



// ----------------- Inherit using Object.create ----------------- //


// ----------------- Inherit using Object.setPrototypeOf ----------------- //

const superadmin = {
  firstName: "Rakesh",
  lastName: "Mondal",
  showfullName() {
    console.log(`Full name is: ${this.firstName} ${this.lastName}`);
  },
};

let admin = {
  firstName: "Prakash",
  lastName: "Maity",
};
Object.setPrototypeOf(admin, superadmin);

let user = {
  firstName: "Ramprasad",
  lastName: "Mondal",
}
Object.setPrototypeOf(user, admin);

user.showfullName()

// ----------------- Inherit using Object.setPrototypeOf ----------------- //



// ---------------- Inheritance using extends ------------------ //

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Max");
console.log(dog);
dog.speak(); // Max makes a noise.
dog.bark(); // Max barks.




// ---------------- Inheritance using extends ------------------ //

function Animal() {}
Animal.prototype.eat = function () {
  return "eating";
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  return "barking";
};

const dog = new Dog();
console.log(dog.eat()); // eating (inherited from Animal)
console.log(dog.bark()); // barking




const obj = {};
const parent = {
  foo: "bar",
  setPropertyValue: function (depth) {
    this.depth = depth;
  },
  getPropertyValue: function () {
    console.log("depth", this.depth);
  },
};

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);
parent.setPropertyValue(4);
//obj.__proto__ = parent;
obj.setPropertyValue(8);

console.log(obj)
// Expected output: "bar"



//  ------------------------- Inheriting Prototypes ------------------------------- //

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dog = new Dog('Rex');

console.log(dog.speak());
console.log(dog.bark()); 
console.log(dog instanceof Dog);  
console.log(dog instanceof Animal); 


//  ------------------------- Inheriting Prototypes ------------------------------- //

//  ------------------------- Deep Prototype Chain  ------------------------------- //

const grandParent = { greet: () => "Hello from grandparent" };
const parent = Object.create(grandParent);
parent.sayHi = () => "Hi from parent";

const child = Object.create(parent);
child.sayHello = () => "Hello from child";

console.log(child.sayHello());
console.log(child.sayHi());
console.log(child.greet());

//  ------------------------- Deep Prototype Chain  ------------------------------- //


*/

