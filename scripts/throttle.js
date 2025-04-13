// ------------------------- Example 1 ------------------------ //
/*
const throttle = (fn, limit) => {
  let lastcall = 0;
  return function (...args) {
    const current = Date.now();
    if (current - lastcall >= limit) {
      lastcall = current;
      fn(...args);
    }
  };
};

const handleResize = throttle(() => {
  console.log("resized");
}, 10000);


window.addEventListener("resize", handleResize);

// ------------------------- Example 1 ------------------------ //
*/

// ------------------------- Example 2 ------------------------ //

const handleRandomClick = throttle(() => {
  console.log("Button operation processed");
}, 10000);

document
  .getElementById("btn-primary")
  .addEventListener("click", handleRandomClick);

function throttle(fn, timelimit) {
  let lastcall = 0;
  return function (...args) {
    const current = Date.now();
    if (current - lastcall >= timelimit) {
      fn(...args);
      lastcall = current;
    }
  };
}
