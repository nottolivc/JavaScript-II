// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
let needItems = items.filter(function(items){
  return items === "Pencil" || items === "Notebook";
});
/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(items, cb) {
  // getLength passes the length of the array into the callback.
  cb(items.length);
}
getLength(items, function(length){
  console.log(length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let last = arr.length;
  cb(arr[last]);
}
getLast(items, function(last){
  console.log(last)
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y)
}
const sumNumbers = function(x,y){
  return x + y;
}
console.log(sumNums(1,2, sumNumbers));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers (x, y) and passes the result to the callback.
  return cb(x,y)
}
const multiplyNumbers = function(x,y){
  return x * y;
}
console.log(multiplyNums(1,2, multiplyNumbers));


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  for (let i = 0; i < list.length; i++) {
    list += list[i];
  }
  // Pass true to the callback if it is, otherwise pass false.
  if {list.includes(item); 
    function cb(return true);
  }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
