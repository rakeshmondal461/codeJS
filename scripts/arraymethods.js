/*

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



const arr2 = [2, 4, 8, 17, 5, 9, 11, 4, 14, 2, 11];

const objArr = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    age: 32,
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    age: 23,
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    age: 26,
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    age: 28,
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    website: 'demarco.info',
    age: 35,
  },
  {
    id: 6,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    age: 26,
  },
  {
    id: 7,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    age: 23,
  },
];


const uniqueval = [...new Set(arr2)];
console.log(uniqueval);

*/

const mappedData = new Map();

mappedData.set("a1", "Rakesh");
mappedData.set("a2", "Prakash");
mappedData.set("a1", "Rahul");

console.log(mappedData);

let arr2 = [4, 8, 17, 5, 2, 9, 11, 4, 14, 2, 11];

let minVal = arr2.reduce((acc, curr) => (acc < curr ? acc : curr), arr2[0]);

let maxVal = arr2.reduce((acc, curr) => (acc > curr ? acc : curr), arr2[0]);

console.log(maxVal);
