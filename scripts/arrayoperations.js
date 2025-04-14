"use strict";

const arr = ["z", "a", "b", "x", "c", "d", "e"];

/*
// CREATING ARRAY FROM OBJECT
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log('>>>>>', Object.entries(person));
console.log('>>>>>', Object.keys(person));
console.log('>>>>>', Object.values(person));
// CREATING ARRAY FROM OBJECT

const arr2 = [2, 4, 8, 17, 5, 9, 11, 4, 14, 2, 11];

// REMOVE DUPLICATE ELEMENTS FROM ARRAY
console.log('arr2>>>', arr2, [...new Set(arr2)]);
// REMOVE DUPLICATE ELEMENTS FROM ARRAY

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


// REMOVE DUPLICATE ELEMENT FROM ARRAY OF OBJECTS
const filteredUnique = objArr.filter((item, index) => {
  return index === objArr.findIndex((elm) => elm.name === item.name);
});

console.log('filteredUnique>>>>', filteredUnique);
// REMOVE DUPLICATE ELEMENT FROM ARRAY OF OBJECTS

// SORTING ARRAY OF OBJECTS
objArr.sort(function (a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
});

console.log('sresult>>>', objArr);
// SORTING ARRAY OF OBJECTS


// REVERSE STRING CODE

const sampleStr = 'Hello';
console.log(sampleStr);
const reverseArr = [];
let strlen = sampleStr.length;
for (let index = 0; index < sampleStr.length; index++) {
  --strlen;
  const element = sampleStr[strlen];
  reverseArr.push(element);
}
console.log(reverseArr.join(''));
// REVERSE STRING CODE


// SLICE : USED TO TAKE SOME VALUES FROM ARRAY. DO NOT CHANGE THE ACTUAL ARRAY
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));
console.log(arr.slice());
console.log('\n');

// SPLICE : USED TO REMOVE SOME ELEMENTS FROM ARRAY.
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(2, 4));
console.log(arr);

// REVERSE : USED TO REVERSE THE ARRAY. IT MUTATES THE MAIN ARRAY.
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const fullArr = arr.concat(arr2);
console.log(fullArr);

// JOIN

console.log(arr2.join('-'));


const colorList = [
  {
    color: 'red',
    value: '#f00',
  },
  {
    color: 'green',
    value: '#0f0',
  },
  {
    color: 'blue',
    value: '#00f',
  },
  {
    color: 'cyan',
    value: '#0ff',
  },
  {
    color: 'magenta',
    value: '#f0f',
  },
  {
    color: 'yellow',
    value: '#ff0',
  },
  {
    color: 'black',
    value: '#000',
  },
];

colorList.forEach((item, index) => {
  console.log(index, `${item.color}=> ${item.value}`);
});



const checkDogs = (juliaData, kateData) => {
  const dogsJuliaCorrected = [...juliaData];
  const dogKateCorrected = [...kateData];
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const bothArray = dogsJuliaCorrected.concat(dogKateCorrected);
  console.log(bothArray);
  bothArray.forEach((dogAge, i) => {
    if (dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


// IMPORTANT USE CASE OF REDUCE METHOD
const numarr = [22, 6, 25, 35, 32, 76, 89, 27, 55];
console.log(numarr);
const minval = numarr.reduce((acc, curr) => {
  if (acc < curr) {
    return acc;
  } else {
    return curr;
  }
}, numarr[0]);

const maxVal = numarr.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, numarr[0]);

console.log(minval);
console.log(maxVal);

*/
