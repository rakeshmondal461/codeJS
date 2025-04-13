/*
// -------------- USE CASE OF CALL( FUNCTION BORROWING ) ----------------------- //
let name1 = {
  firstname: "Rakesh",
  lastname: "Mondal",
};

function printFullName(state) {
  let firstname = "Salman";
  console.log(`The full name is:${this.firstname} ${this.lastname} from ${state}`);
}

let name2 = {
  firstname: "John",
  lastname: "Doe",
};

printFullName.call(name1, "West Bengal"); // The full name is : Rakesh Mondal from West Bengal



//printFullName.call(name2);

// -------------- USE CASE OF CALL( FUNCTION BORROWING ) --------------------- //


// -------------- USE CASE OF BIND ------------------- //
/*
let name1 = {
  firstname: "Rakesh",
  lastname: "Mondal",
};

function printFullName(addr) {
  console.log(
    `The full name is:${this.firstname} ${this.lastname} from ${addr}`
  );
}

const name1bind = printFullName.bind(name1,["West Bengal","Kolkata","Sec V"]);

name1bind();

// -------------- USE CASE OF BIND ---------------- //



// -------------- USE CASE OF APPLY --------------- //

let name1 = {
  firstname: "Rakesh",
  lastname: "Mondal",
};

function printFullName(state) {
  console.log(`The full name is:${this.firstname} ${this.lastname} from ${state}`);
}

let name2 = {
  firstname: "John",
  lastname: "Doe",
};

printFullName.apply(name1, ["West Bengal"]);

//printFullName.call(name2);
/*

// ----------------- POLYFILL FOR CALL METHOD ----------------- //

Function.prototype.customcall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error();
  }
  context.fn = this;
  context.fn(...args);
};

// ----------------- POLYFILL FOR CALL METHOD ----------------- //

// ----------------- POLYFILL FOR BIND METHOD ----------------- //

Function.prototype.custombind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error();
  }
  context.fn = this;
  return function (...outArgs) {
    return context.fn(...args, ...outArgs);
  };
};

// ----------------- POLYFILL FOR BIND METHOD ----------------- //

*/

// ----------------- POLYFILL FOR APPLY METHOD ----------------- //

Function.prototype.customapply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error('Something went wrong');
  }
  if(!Array.isArray(args)){
    throw new Error('CreateListFromArrayLike called on non-object');
  }
  context.fn = this;
  context.fn(...args);
};

// ----------------- POLYFILL FOR APPLY METHOD ----------------- //



let name1 = {
  firstname: "Rakesh",
  lastname: "Mondal",
};

function printFullName(state) {
  console.log(
    `The full name is:${this.firstname} ${this.lastname} from ${state}`
  );
}

let name2 = {
  firstname: "John",
  lastname: "Doe",
};

printFullName.customapply(name2, ["West Bengal"]);


