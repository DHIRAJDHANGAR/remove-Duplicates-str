let Str = "geeksforgeeks";
let array = Str.split("");
// let newStr = " ";
// newStr = array.toString();

function removeDuplicates() {
  let add = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      add.push(array[i]);
      //   console.log("ln11", add);
    }
  }
  console.log(add);
}
removeDuplicates(array);
