document.getElementById("outer").addEventListener(
  "click",
  () => {
    console.log("Outer DIV clicked (Capturing)");
  }
);

document.getElementById("btn-primary").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Button clicked");
  },
);
