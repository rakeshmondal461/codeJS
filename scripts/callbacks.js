/*
function callback(val) {
  console.log(`Result => ${val}`);
}

function main(num, fn) {
  let sqr = num * num;
  console.log("Processing...");
  setTimeout(() => {
    fn(sqr);
  }, 3000);
}


main(5,callback);



// ---------------- EXERCISE 1 ---------------- //

function step1(fn) {
  setTimeout(() => {
    console.log("Step 1 complete!");
    fn();
  }, 1000);
}

function step2(fn) {
  setTimeout(() => {
    console.log("Step 2 complete!");
    fn();
  }, 1000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3 complete!");
  }, 1000);
}

step1(() => {
  step2(() => {
    step3();
  });
});



// ----------------- EXERCISE 2 ------------------ //

function fetchUserData(next) {
  console.log("Fetching data from server...");
  setTimeout(() => {
    const error = Math.random() > 0.7; // 30% success rate (0.7 = 70% chance of error)
    if (error) {
      next(new Error("Failed to fetch data"), null);
    } else {
      let user = { name: "User 1", salary: 20000 };
      console.log("Data fetched!");
      next(null, user);
    }
  }, 3000);
}

function processUserData(data, next) {
  console.log("Processing data...");
  setTimeout(() => {
    const error = Math.random() > 0.7; // 30% success rate (0.7 = 70% chance of error)
    if (error) {
      next(new Error("Failed to process data"), null);
    } else {
      let salary = data?.salary * 1.5;
      data.salary = salary;
      console.log("Data processes!");
      next(null, data);
    }
  }, 2000);
}

function saveUserData(data) {
  console.log("Storing user data...");
  setTimeout(() => {
    const error = Math.random() > 0.7; // 30% success rate (0.7 = 70% chance of error)
    if (error) {
      next(new Error("Failed to store data"));
    } else {
      console.log("Data stored!", data);
    }
  }, 3000);
}

fetchUserData((err, data) => {
  if (err) {
    console.error("Error:", err.message); // Handle the error
    return;
  }
  processUserData(data, (err, data) => {
    if (err) {
      console.error("Error:", err.message); // Handle the error
      return;
    }
    saveUserData(data);
  });
});
*/
// --------------------- EXERCISE 3: Nested Callbacks with Dependencies --------------------- //
/*
function checkInventory(next) {
  console.log("Checking Inventory...");
  setTimeout(() => {
    const isNotAvailableInventory = Math.random() > 0.7; // 30% success rate (0.7 = 70% chance of error)
    if (isNotAvailableInventory) {
      next(new Error("Out of stock!"));
    } else {
      console.log("Product available!");
      next(null);
    }
  }, 2000);
}

function processPayment(next) {
  console.log("Processing payment...");
  setTimeout(() => {
    const isFailedPayment = Math.random() > 0.7; // 30% success rate (0.7 = 70% chance of error)
    if (isFailedPayment) {
      next(new Error("Payment Failed!"));
    } else {
      console.log("Payment success!");
      next(null);
    }
  }, 2000);
}

function confirmOrder(next) {
  console.log("Confirming order...");
  setTimeout(() => {
    const isFailedPayment = Math.random() > 0.7; // 30% success rate (0.7 = 70% chance of error)
    if (isFailedPayment) {
      next(new Error("Failed to place order!"));
    } else {
      console.log("Congratulations! Order placed.");
      next(null);
    }
  }, 2000);
}

checkInventory((err) => {
  if (err) {
    console.error(err);
    return;
  }
  processPayment((err) => {
    if (err) {
      console.error(err);
      return;
    }
    confirmOrder((err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("✅ Order Process Completed Successfully!");
    });
  });
});
*/
// ----------------- EXERCISE 4: Parallel Callback Chain ----------------------------- //

// Simulate async functions with random delays
/*
function fetchWeatherData(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.7; // 30% chance of success
        error 
            ? callback(new Error("Failed to fetch weather data")) 
            : callback(null, { temperature: 28, condition: "Sunny" });
    }, Math.random() * 2000);
}

function fetchNewsHeadlines(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.7;
        error 
            ? callback(new Error("Failed to fetch news headlines")) 
            : callback(null, ["Headline 1", "Headline 2", "Headline 3"]);
    }, Math.random() * 2000);
}

function fetchStockPrices(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.7;
        error 
            ? callback(new Error("Failed to fetch stock prices")) 
            : callback(null, { SENSEX: 65432, NASDAQ: 15320 });
    }, Math.random() * 2000);
}

// Parallel Execution Logic
function fetchAllData(callback) {
    let results = {};
    let errors = [];
    let completed = 0;

    const handleResult = (key, err, data) => {
        if (err) {
            errors.push({ key, error: err.message });
        } else {
            results[key] = data;
        }

        completed++;
        if (completed === 3) {
            // Final Callback: Either success or errors
            if (errors.length) {
                callback(errors, null);
            } else {
                callback(null, results);
            }
        }
    };

    fetchWeatherData((err, data) => handleResult('weather', err, data));
    fetchNewsHeadlines((err, data) => handleResult('news', err, data));
    fetchStockPrices((err, data) => handleResult('stocks', err, data));
}

// Run the solution
fetchAllData((errors, results) => {
    if (errors) {
        console.error("Errors encountered:");
        errors.forEach(err => console.error(`❌ ${err.key}: ${err.error}`));
    } else {
        console.log("✅ All data fetched successfully:", results);
    }
});
*/

function delayedMessage(message, delay, callback) {
  // Implement this function
  console.log(message);
  setTimeout(() => {
    callback();
  }, delay);
}

// Example usage:
delayedMessage("Hello, world!", 2000, () =>
  console.log("Message displayed after delay")
);
