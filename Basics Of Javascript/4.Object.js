/*

JavaScript Objects:
    In real life , objects are things like : houses , cars , pepole , animals , or any other things. 

    A real life car has properties like weight and color.
    A real life car has methods like start and stop.

Note:
    Object are also variable too.
    But objects can contain many vlaues.

*/

// Create an Object:
const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

//console.log(car);     output: { type: 'Fiat', model: '500', color: 'white' }

console.log(`This car type is ${car.type}`); // output: This car type is Fiat

//spaces and line breaks does not important.

//create an empty object and add 4 properties.

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person); //output:   { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }

console.log(person.firstName); //output:   Jhon

//create a new object using new Object() , and add 4 properties.

// Create an Object
const person2 = new Object();

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

console.log(person2);

console.log(person2.firstName);

//  same output as the above.

/*

Deleting Properties:
    The delete keyword deletes a property from an object.

*/

const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person3.age;

console.log(person3.age);   //  undefined