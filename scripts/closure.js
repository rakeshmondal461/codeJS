/*
function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();

-----------------------------

function a() {
  let x = 10;
  return function b() {
    console.log(x);
  };
}

let c = a();
c();


// ------------------------ EXERCISE 1 ----------------------- //

function createCounter(){
    let count = 0;
    function increment(){
        count++;
    }

    function getCount(){
        return count;
    }

    return {increment, getCount}
}


var fun = createCounter();


fun.increment();
console.log(fun.getCount());
fun.increment();
console.log(fun.getCount());

// ------------------------ EXERCISE 2 ----------------------- //

function createLogger(prefix){
    return function logError(errorText){
        console.log(`${prefix} ${errorText}`)
    }
}

const errorLogger = createLogger("[ERROR]");
errorLogger("File not found"); 

errorLogger("Bad Request exception"); 

// ------------------------ EXERCISE 3 ----------------------- //

function delay(fn,duration){
    return function runFunction(){
        setTimeout(() => {
            fn();
        }, duration);
    }
}

const sayHello = delay(() => console.log("Hello!"), 2000);
sayHello(); // Logs "Hello!" after 2 seconds

// ------------------------ EXERCISE 4 ----------------------- //


function once(fn){
    let invokeCount = 0;
    return function(){
        if(invokeCount === 0){
            fn();
        }
        invokeCount++;
    }
}


const startApp = once(() => console.log("App started"));
startApp(); // "App started"
startApp(); // No output
startApp(); // No output
startApp(); // No output



// ---------------  Exercise 6: Private Bank Account  -----------------

function createBankAccount() {
  let totalAmount = 0;

  function deposit(amount) {
    if(!amount) return;
    totalAmount = totalAmount + amount;
  }

  function withdraw(amount) {
    if(!amount) return;
    totalAmount = totalAmount - amount;
  }

  function getBalance() {
    return totalAmount;
  }

  return { deposit, withdraw, getBalance };
}


const res = createBankAccount();

res.deposit(25);
console.log(res.getBalance());
res.withdraw(10);
console.log(res.getBalance());



// ---------------  Exercise 7: Rate Limiter  -----------------


function rateLimiter(fun,limit){
    let flag = 0;
    return function inner(funArg){
        if(flag<limit){
            fun(funArg)
            flag++;
        }else{
            return;
        }
    }
}

const limitedLogger = rateLimiter(console.log, 2); 
limitedLogger("Call 1"); // Logs immediately
limitedLogger("Call 2"); // Logs immediately
limitedLogger("Call 3"); // Skipped (rate limit exceeded)
limitedLogger("Call 4"); // Skipped (rate limit exceeded)
*/
// ---------------- Exercise 8: Memoization Function ---------------

function slowSquare(n) {
  console.log("Calculating...");
  return n * n;
}

function memoize(fn) {
  const cache = {};
  function inner(val) {
    if (cache[val]) {
      console.log("Cached result");
      return cache[val];
    }

    let res = fn(val);
    cache[val] = res;
    return res;
  }
  return inner;
}

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(6));
console.log(memoizedSquare(7));
console.log(memoizedSquare(8));
console.log(memoizedSquare(9));
