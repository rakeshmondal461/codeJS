const datas = [3, 8, 10, 18, 19, 5, 11, 4];
//console.log(datas);

function a(item) {
  return item * 5;
}

// const filtered = datas.filter((item) => item > 15);
// console.log(filtered);

const reduced = datas.reduce((acc, current) => acc + current, 6);

console.log(reduced);

// --------------------- POLYFILL MAP FUNCTION -------------------- //

Array.prototype.mymap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// --------------------- POLYFILL MAP FUNCTION -------------------- //

// --------------------- POLYFILL FILTER FUNCTION -------------------- //

Array.prototype.myfilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
// --------------------- POLYFILL FILTER FUNCTION -------------------- //



// --------------------- POLYFILL REDUCE FUNCTION -------------------- //

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    if (this == null) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let array = Object(this);
    let length = array.length >>> 0;
    let accumulator = initialValue;
    let startIndex = 0;

    // If initialValue is not provided, use the first element as the accumulator
    if (accumulator === undefined) {
      if (length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = array[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < length; i++) {
      if (i in array) {
        accumulator = callback(accumulator, array[i], i, array);
      }
    }

    return accumulator;
  };
}


// --------------------- POLYFILL REDUCE FUNCTION -------------------- //



