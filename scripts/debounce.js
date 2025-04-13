// ------------------------- Example 1 ------------------------ //

/*
document.getElementById("searchBox").addEventListener("keyup", (e) => {
  const searchKey = e.target.value;
  if (!searchKey) return;
  search(e.target.value);
});

function searchInfo(searchKeyword) {
  console.log("Search API called 🔎", searchKeyword);
}

const search = debounce(searchInfo, 1000);

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// ------------------------- Example 1 ------------------------ //



*/

// ------------------------- Example 2 ------------------------ //

const handleResize = debounce(() => {
  console.log("Resized");
}, 1000);
window.addEventListener("resize", handleResize);

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
