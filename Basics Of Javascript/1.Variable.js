/*
A variable is container that store a value.
That is similar to the container that store rice , water and other things.

Types Of Variable :
    Three types of Variable , we used in the coding are as follows:
    1)  var
    2)  let
    3)  const
    
    */

/*
1)  var:
    The var statement declares funcation scoped or global soped.
    Its means it initilizes each to a value.
*/


var x = "Ahmad";

console.log(x);   // Expected output:   Ahmad

{
    var x = "Umar";
    console.log(x);   // Expected output:   Umar
}

console.log(x);   // Expected output:   Umar



/*
2)  let:
    Variable declared with let have a Block Scope.
    Variable declared with let must be declared before use.
    It cannot be redeclared in same block.
*/

let number = 10;    //Gloal Scope

{
    let number = 20;    //Block Scope
    console.log(number);   // Expected output: 20  
}

{
    let number = 30;    //Block Scope
    console.log(number);   // Expected output: 30  
}

console.log(number);   // Expected output:  10


/*
3)  const:
    Variable declared with const have a Block Scope.
    Variable declared with const must be declared before use.
    It cannot be redeclared in the code.

*/



const numbers = 10;    //Gloal Scope
console.log(numbers); 