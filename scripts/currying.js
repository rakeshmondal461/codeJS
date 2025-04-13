/*

function add(){
    return function(a){
        return function(b){
            return function(c){
                return a+b+c;
            }
        }
    }
}

const res = add();

let res2 = res(2)(3)(5)

console.log(res2)




// --------------------- EXERCISE 1 -------------------

function multiply(a) {
  return function inner(b) {
      return function mineer(c){
        return a*b*c;
      }
  }
}

console.log(multiply(2)(3)(4)); // 24


// ------------------- EXERCISE 2 ---------------------



function sum(num){
    let total = num;
    function inner(arg){
        if(arg){
            total = total + arg;
            return inner;
        }else{
            return total;
        }
    }
    return inner;
}

const res = sum(1)(7)(9)(8)();

console.log(res);

*/
// ------------------- EXERCISE 3 ---------------------



function filterBy(condition){
    function inner(arr){
       const filteredArray = arr.filter(condition);
       return filteredArray;
    }
    return inner;
}


const greaterThan10 = filterBy((x) => x > 10);

console.log(greaterThan10([5, 12, 8, 20, 25])); // [12, 20]

console.log(greaterThan10([1, 2, 4, 8, 12, 14])); // [12, 20]

// ------------------- EXERCISE 4 ---------------------

function mapped(condition){
    function inner(arr){
       const mappedArray = arr.map(condition);
       return mappedArray;
    }
    return inner;
}

const double = mapped((x) => x * 2);
const triple = mapped((x) => x * 3);
console.log(double([1, 2, 3])); // [2, 4, 6]

console.log(triple([1, 2, 3])); // [2, 4, 6]