/*
The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.

*/

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
 
function myFunction(item, index) {
  text += index + ": " + item + "   "; 
}

console.log(text);