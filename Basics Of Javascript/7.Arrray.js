/*

Javascript Array : 

    The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

*/

// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
//   ];

//   console.log(cars);

//  We can also create an array, and then provide the elements:

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// console.log(cars);


//  Using the JavaScript Keyword new There is no need to use new Array().

// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars);




/*

Basic Array Methods:


Array length    :The length property returns the length (size) of an array.
Array toString()    :The JavaScript method toString() converts an array to a string of (comma separated) array values.
Array at()  : The at() method returns an indexed element from an array.
Array join()    : The join() method also joins all array elements into a string.
Array pop() : The pop() method removes the last element from an array.
Array push()    :The push() method adds a new element to an array (at the end).
Array shift()   :The shift() method removes the first array element and "shifts" all other elements to a lower index.
Array unshift() :The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
Array delete()  :The delete()method delete a element to array.
Array concat()  :In programming languages, concatenation means joining strings end-to-end.Concatenation "snow" and "ball" gives "snowball".
Array copyWithin()  :The copyWithin() method copies array elements to another position in an array.
:Syntax:copyWithin(target, start, end)      
The copyWithin() method copies array elements to another position in an array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
The copyWithin() method does not change the length of the array.

Array flat()    :The flat() method creates a new array with sub-array elements concatenated to a specified depth.
Array splice()  :The splice() method can be used to add new items to an array.
we can use splice() to remove elements without leaving "holes" in the array.

Array toSpliced()   :The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
Array slice()   :The slice() method slices out a piece of an array into a new array.The slice() method does not remove any elements from the source array.
Array indexOf() :The indexOf() method searches an array for an element value and returns its position.The first item has position 0, the second item has position 1, and so on.
Array lastIndexOf() :Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
Array includes()    :The includes() method returns true if a array contains a specified value.Otherwise it returns false.
Array find()    :   The find() method returns the value of the first array element that passes a test function.
Array findIndex()   :The findIndex() method returns the index of the first array element that passes a test function.
Array findLast()    :The findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
Array findLastIndex()   :The findLastIndex() method finds the index of the last element that satisfies a condition.

*/