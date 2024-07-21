/*
Javascript operators are used to perform different types of mathematical and logical computations.

Types of JavaScript Operators:

1)  Arithmetic Operators
2)  Assignment Operators
3)  Comparison Operators
4)  String Operators
5)  Logical Operators
6)  Bitwise Operators
7)  Ternary Operators

*/

/*

1)Arithmetics operator :

Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Division Remainder)
++	        Increment
--	        Decrement

*/


/*

2)  JavaScript Comparison Operators

Operator	Description
==	        equal to
===	        equal value and equal type
!=	           not equal
!==	        not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	        less than or equal to

*/

/*

3)  JavaScript Logical Operators


Operator	Description
&&	        logical and
||	        logical or
!	        logical not

*/


/*

JavaScript Assignment Operators:

Operator	Example	        Same As
=	        x = y	        x = y
+=	        x += y	        x = x + y
-=	        x -= y	        x = x - y
*=	        x *= y	        x = x * y
/=	        x /= y	        x = x / y
%=	        x %= y	        x = x % y
**=	        x **= y	        x = x ** y


*/


/*

Ternary Operators:

Syntax:
    variablename = (condition) ? value1:value2 

*/

let age = 19;

let voteable = (age <= 18) ? "Too young":"Old enough to vote";

console.log(voteable);