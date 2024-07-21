/*

JavaScript Function Definitions:

    A funcation is a block of code that performs a particular tasks.
    A funcation is executed when "something" invoke it(calls it).

Funcation syntax:

funcation nameOfFuncation(parameter1 , parameter2 , parameter3 , ......) {
    //  code to be exeuted
}

*/

let a = 10;

let b = 15;

function myFuncation(a, b) {
    return a * b;
}

let result = myFuncation(a, b);

console.log(result);

//output :  150

/*

Function Invocation:
    The code inside the funcation will execute when "something" invoke the funcation.
    For Example:
        When an event occurs.
        Automatically (self invoked) 

*/

/*

Funcation Return :  
    When program reaches a return statement , the funcation will stop executing.
    If funcation was invoked from a statement, the program will "return" to excute the code after the invoked statement.
    Funcations often compute a return value. The "returned" value back to the "caller".
*/


function toFahernheit(c) {
    return (c * 9 / 5) + 32;
}

let value = toFahernheit(25);

console.log(`Convert Fahernheit to Celsius : ${value}`);

//  output: Convert Fahernheit to Celsius : 77


/*

Local variables:

    Variable declared with in the funcation , become a local to the the funcation.
    Local variable can be only accessed from with in the funcation.

*/
let Name;

let text = `Outside : ${typeof Name} ${ Name}`;

console.log(text);      //output: undefined undefined

function myFunction() {
    let Name = "Ahmad Umar";

    let text = `Inside : ${typeof Name} ${ Name}`;

    console.log(text);
}

myFunction();   //output:  Inside : string Ahmad Umar 