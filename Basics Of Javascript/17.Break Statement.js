/*

The break statement "jumps out" of a loop.
*/


let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 9) { break; }
  text += i + " ";
}

console.log(text);