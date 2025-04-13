

let a = 100;
console.log(a);
var b = 20;


/*
----------------------------------
var count = 5;

function checkCount() {
    if (false) {
        var count = 10;
    }
    console.log(count);
}

checkCount();
console.log(count);

-------------------------------------------

var name = "Global";

function showName() {
    console.log(this.name);
}

var obj = {
    name: "Object",
    showName: showName
};

var anotherObj = {
    name: "Another Object",
    showName: function() {
        console.log(this.name);
    }
};

showName();
obj.showName();
anotherObj.showName();

----------------------------------------

var x = 1;

(function () {
    console.log(x); // ?
    var x = 2;
    console.log(x); // ?

    function x() {}
    console.log(x); // ?
})();


*/


/*

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // ?
    }, 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j);  // ?
    }, 1000);
}


*/


