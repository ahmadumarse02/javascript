/*

The null type:
    The null type is the second primitive data type that also has only one value null. 
    
    For example:
*/

let obj = null;
console.log(typeof obj); // object
/*
The typeof null returns object is a known bug in JavaScript. A proposal to fix was rejected due to the potential to break many existing sites.

JavaScript defines that null is equal to undefined as follows:

*/

console.log(null == undefined); // true