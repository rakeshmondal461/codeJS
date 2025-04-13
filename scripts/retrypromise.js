
// ------------------ RETRY MECHANISM IN PROMISE ---------------------- //


function retryFunction(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(currentAttempt) {
      fn()
        .then(resolve)
        .catch((err) => {
          if (currentAttempt < retries) {
            console.log(`Attempt ${currentAttempt + 1} failed. Retrying...`);
            setTimeout(() => {
              attempt(currentAttempt + 1);
            }, delay);
          } else {
            console.log(`All attempt failed`);
            reject(err);
          }
        });
    }
    attempt(0);
  });
}


let attemptCount = 0;

function unstableFunction() {
  return new Promise((resolve, reject) => {
    attemptCount++;
    console.log(`Running attempt ${attemptCount}`);
    const err = Math.random() > 0.4;
    if (err) {
      reject("Failed!");
    }
    resolve("Success!");
  });
}

retryFunction(unstableFunction)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
