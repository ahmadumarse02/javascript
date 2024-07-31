/*

The boolean type:
    The boolean type has two literal values:
    true and false in lowercase.
    The following example declares two variables that hold the boolean values.

*/    
let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean


/*

    JavaScript allows values of other types to be converted into boolean values of true or false.

    To convert values of other types into boolean values, you use the Boolean() function.

    The following table displays the conversion rules:

Type	            true	                                            false
string	            non-empty string	                                empty string
number	            non-zero number and Infinity	                    0, NaN
object	            non-null object	null
undefined	 	    undefined

*/

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false