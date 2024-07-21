/*

Javascript String:
    String are storing text.
    String are writen with quotes(single or double).

*/

/*

Javascript String:
    All javascript string methods produce a new string with altering the orignal string.

Basics Methods:
    The Basics javascript methods are as follows:
    
    1)  String length   : It is used to find the length of string.
    2)  String charAt() : The charAt() is used to return the character at a specified index (position) in a string.
    3)  String charCodeAt() : The charCodeAt() is used to return the code of the character at a specified index of a string.
    4)  String at() : The At() is similar to the charAt() but difference is that charAt() is not supported the negative index(length)
    5)  String [ ]  : It makes strings look like arrays (but they are not)
    6)  String slice()  : slice extract a part of a string and return the extracted part in a new string.in this methods two parameter includes (start position , end position(end not include))
    7)  String substring()  : It is similar to the slice() but difference is that start and end value less than 0 are treated as 0.
    8)  String substr() : It is similar to the slice() but difference is that the second parameter is length of extracted part.
    9)  String toUpperCase()    : It is used to convert the string into uppercase.
    10) String toLowerCase()    : It is used to convert the string into lowercase.
    11) String concat() : It is used to join the two string.
    12) String trim()   : It is used to removes the white spaces from sides of a string.
    13) String trimStart()  : It remove the strat(left side) whitespace
    14) String trimEnd()    : It remove the end(right side) whitespace
    15) String padStart()   : The padStart() method pads a string from the start.It pads a string with another string (multiple times) until it reaches a given length.
    16) String padEnd()     : The padEnd() method pads a string from the end.It pads a string with another string (multiple times) until it reaches a given length.      
    17) String repeat()     : The repeat() method returns a string with a number of copies of a string.The repeat() method does not change the original string.
    18) String replace()    : The replace() method replaces a specified value with another value in a string:
    19) String replaceAll() : The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
    20)  String split()     : A string can be converted to an array with the split() method
    21) String indexOf()    : The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
    22) String lastIndexOf()    : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
    23) String search()     : The search() method searches a string for a string (or a regular expression) and returns the position of the match
    24) String match()      : The match() method returns an array containing the results of matching a string against a string (or a regular expression).
    25) String matchAll()   : The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
    26) String includes()   : The includes() method returns true if a string contains a specified value.Otherwise it returns false.
    27) String startsWith() : The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false.
    28) String endsWith()   : The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false.


    29) String Templates    : 
*/



let firstName = "Ahmad";
let lastName = "Umar";

let text = `Welcome ${firstName }, ${lastName}!`;

console.log(text);

//  output : Welcome Ahmad, Umar!