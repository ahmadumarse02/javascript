/*
    JavaScript has the primitive data types:

    1)  null
    2)  undefined
    3)  boolean
    4)  number
    5)  string
    6)  symbol 
    7)  bigint

*/

/*

    JavaScript is a dynamically typed language,
    meaning that a variable isn’t associated with a specific type. 
    In other words, a variable can hold a value of different types.
    To determine the current type of the value stored in a variable,
    you use the typeof operator:

*/

let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"