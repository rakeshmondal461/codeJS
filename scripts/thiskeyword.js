// -------------------- Exercise 1 --------------------- //

/*

var name = "Global";

function showName() {
    console.log(this.name);
}

const obj1 = {
    name: "Object 1",
    showName
};

const obj2 = {
    name: "Object 2"
};

obj1.showName(); 

showName(); 

obj1.showName.call(obj2);

*/

// --------------------- Exercise 1 --------------------- //

// --------------------- Exercise 2 --------------------- //
/*
function showBehaveThis() {
  console.log(this);
}

const obj3 = {
  name: "Object 3",
  showBehaveThis: function () {
    console.log(this);
  },

  showBehaveThisArrow: ()=>{
    console.log(this);
  }
};

obj3.showBehaveThis();
obj3.showBehaveThisArrow();

*/

// --------------------- Exercise 2 --------------------- //

// --------------------- Exercise 3 --------------------- //

var name = "Global";

const obj = {
  name: "Outer",
  regularFunc: function () {
    console.log("Regular:", this.name);

    const innerObj = {
      name: "Inner",
      arrowFunc: () => {
        console.log("Arrow:", this.name);
      },
      regularFunc: function () {
        console.log("Inner Regular:", this.name);
      },
    };

    innerObj.arrowFunc();
    innerObj.regularFunc();
  },
};

obj.regularFunc();

// --------------------- Exercise 3 --------------------- //

