let Str = "geeksforgeeks";
let input = [];

for (let i = 0; i < Str.length; i++) {
  if (Str[i] !== Str[i + 1]) {
    input.push(Str[i]);
  }
}
// console.log(newStr + " ");
const newStr = input.join("");
console.log("NewString:", newStr);
