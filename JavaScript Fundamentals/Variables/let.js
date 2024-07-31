/*

    The let keyword was introduced in ES6 (2015).
    Variables declared with let have Block Scope.
    Variables declared with let must be Declared before use.
    Variables declared with let cannot be Redeclared in the same scope.

*/  

let  x = 10;
// Here x is 10

{  
  let x = 2;
  console.log(x);

  // Here x is 2
}

console.log(x);

// Here x is 10