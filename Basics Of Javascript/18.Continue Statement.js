/*
The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

*/

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 4) { continue; }
  text += i + " ";
}

console.log(text);