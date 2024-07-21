//The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


let text = ""
let i = 0;

do {
  text += i + " ";
  i++;
}
while (i < 10);

console.log(text);