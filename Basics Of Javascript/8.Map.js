/*

A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

*/

// Create a Map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// let numb = fruits.get("apples");
// console.log("There are " + numb + " apples.");

//we can add elements to a Map with the set() method.

// const fruits = new Map();

//Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// let numb = fruits.get("apples");
// console.log("There are " + numb + " apples.");

// The get methods get the value of the keys in a map.

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log("The price of apples: " + fruits.get("apples"));