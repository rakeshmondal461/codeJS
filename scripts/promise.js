/*
function testPromise(){
  return new Promise((resolve, reject) => {
    const error = Math.random() > 0.7; // 30% chance of success
    if (error) reject("Something went wrong!");
    resolve("Promise resolved successfully.");
  });
}


testPromise().then((value) => console.log(value)).catch((err) => console.error(err));


function getProduct() {
  return new Promise((resolve, reject) => {
    const err = Math.random() > 0.4;
    console.log("Fetching products...");
    setTimeout(() => {
      if (err) {
        reject("Failed to fetch product");
        return;
      }
      console.log("Product fetched successfully.");
      resolve({ id: 2, name: "Product 1" });
    }, 2000);
  });
}

function checkStock(productId) {
  return new Promise((resolve, reject) => {
    const err = productId !== 2;
    console.log("Checking product stock...");
    setTimeout(() => {
      if (err) {
        console.log("Product is out of stock.");
        reject(false);
        return;
      }
      console.log("Product is available.");
      resolve(true);
    }, 2000);
  });
}

function placeOrder(productId) {
  return new Promise((resolve, reject) => {
    const productStat = productId === 2;
    const err = Math.random() > 0.5;
    console.log("Placing order...");
    setTimeout(() => {
      if (err || !productStat) {
        reject("Order failed! Something went wrong.");
        return;
      }
      resolve("Order placed successfully");
    }, 2000);
  });
}

getProduct()
  .then((res) => checkStock(res.id))
  .then((res) => placeOrder(2))
  .then((res) => console.log(res))
  .catch((err) => console.error("Error:", err))
  .finally(() => console.log("Process completed ✅✅✅"));


//////// Waits for all promises to resolve, if any rejected then immediatly rejects.
Promise.all([
  Promise.resolve("Task 1 completed"),
  Promise.reject("Task 2 failed"),
  Promise.resolve("Task 3 completed"),
])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));



//////// Waits for all promises to settle whatever the outcomes ///////

// Promise.allSettled([
//   Promise.resolve("Task 1 completed"),
//   Promise.reject("Task 2 failed"),
//   Promise.resolve("Task 3 completed"),
// ]).then((results) => console.log(results));

//////// resolves or rejects as soon as the first promise settles. ///////

// Promise.race([
//   new Promise((resolve,reject) => setTimeout(() => resolve("Task 1 finished"), 2000)),
//   new Promise((resolve,reject) => setTimeout(() => reject("Task 2 failed"), 1000)),
//   new Promise((resolve,reject) => setTimeout(() => resolve("Task 3 finished"), 1500)),
//   new Promise((resolve,reject) => setTimeout(() => resolve("Task 4 finished"), 500)),
// ]).then((result) => console.log(result)).catch((err)=>console.log(err));

//////// resolves with the first fulfilled promise. ///////

Promise.any([
  Promise.reject("Task 1 failed"),
  Promise.reject("Task 2 completed"),
  Promise.resolve("Task 3 completed"),
])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.8) {
      reject("Promise 1 failed");
    } else {
      resolve("Promise 1 success");
    }
  }, 7000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.8) {
      reject("Promise 2 failed");
    } else {
      resolve("Promise 2 success");
    }
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      reject("Promise 3 failed");
    } else {
      resolve("Promise 3 success");
    }
  }, 1000);
});

Promise.any([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((err) => {
    console.log(`Error block: ${err}`);
  });





function delayCallbackFn(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve(`Waited for ${ms} milliseconds`);
      } else {
        reject("Something went wrong");
      }
    }, ms);
  });
}

delayCallbackFn(3000)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));



function testPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  });
}

function testAsynchronousPromise() {
  console.log("Hi");
  testPromise()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log("After promise");
}

async function testAsynchronous() {
  try {
    console.log("Hi");
    const res = await testPromise();
    console.log(res);
    console.log("After promise");
  } catch (error) {
    console.log(error);
  }
}

testAsynchronousPromise();
testAsynchronous();
    */

// --------------- CANCELLABLE PROMISE ------------------- //

function cancelablePromise(delay) {
  let cancel;
  const promise = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve("Completed");
    }, delay);
    cancel = () => {
      clearTimeout(timer);
      reject("Rejected");
    };
  });
  return { promise, cancel };
}

const task = cancelablePromise(5000);

task.promise.then((res) => console.log(res)).catch((err) => console.log(err));

