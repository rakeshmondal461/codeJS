for (let i = 1; i <= 5; i++) {
  let spaces = "";
  for (let k = 5; k > i; k--) {
    spaces += " ";
  }

  for (let j = 1; j <= i; j++) {
    spaces = spaces + " " + "*";
  }
  console.log(spaces);
}
