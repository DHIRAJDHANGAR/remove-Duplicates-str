let Str = "geeksforgeeks";
let array = Str.split("");
let newStr = [];

function removeDuplicates() {
  let input = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      input.push(array[i]);
    }
  }
  newStr = input.join("");
}
removeDuplicates(array);
console.log(newStr);
