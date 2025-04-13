
//GLOBAL SCOPE
var a = 10;
console.log(a);

function showValue() {
  // FUNCTION SCOPE
  var a = 30;
  console.log(a);
}

{
  // BLOCK SCOPE
  let a = 20;
  console.log(a);
}

showValue();






