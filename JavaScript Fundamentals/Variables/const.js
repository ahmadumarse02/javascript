/*

    The const keyword was introduced in ES6 (2015).
    Variables defined with const cannot be Redeclared.
    Variables defined with const cannot be Reassigned.
    Variables defined with const have Block Scope.

*/

// const PI = 3.141592653589793;
// PI = 3.14;

// console.log(PI)  Error


// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// not error
/*
Constant Objects and Arrays:
    The keyword const is a little misleading.
    It does not define a constant value.
    It defines a constant reference to a value.

    Because of this you can NOT:

        Reassign a constant value
        Reassign a constant array
        Reassign a constant object

]   But you CAN:

        Change the elements of constant array
        Change the properties of constant object.

*/