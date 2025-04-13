// LEGAL SHADOWING USING LET
let x = 10;

{
  let x = 20;
  console.log(x);
}

console.log(x);
console.log("-------------------------------");

// LEGAL SHADOWING USING VAR
var a = 50;
{
  var a = 100;
  console.log(a);
}

console.log(a);
console.log("-------------------------------");

// LEGAL SHADOWING USING VAR AND LET
var b = 150;
{
  let b = 300;
  console.log(b);
}

console.log(b);


// ILLEGAL SHADOWING USING LET AND VAR
/*
let c = 250;
{
  var c = 500;
  console.log(c);
}

console.log(c);
//SyntaxError: Identifier 'c' has already been declared

*/
