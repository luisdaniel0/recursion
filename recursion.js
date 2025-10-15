// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another function fibsRec which solves the same problem recursively.
// Test both versions of your functions by passing in various lengths as arguments.

// function fibs(n) {
//   //this is what we're starting out with because fibonacci sequence starts with 0,1 and then the sum of the prev 2 numbers
//   let arr = [0, 1];

//   //edge cases
//   if (n === 0) {
//     return [];
//   }
//   if (n === 1) {
//     return [0];
//   }
//   if (n === 2) {
//     return [0, 1];
//   }

//   for (i = 2; i < n; i++) {
//     let fibNumers = arr[arr.length - 1] + arr[arr.length - 2];
//     arr.push(fibNumers);
//   }
//   return arr;
// }

//2,3,4,5,6,7

//2,3,4

// [0,1,1,2,3,5,8,13]
// fib sequence starts at 0,1 and then every number after that is the sum of the previous 2 numbers

// an array containing 0,1
// loop over the array
// add the elements in the array as your looping them?
// push the sums of each iteration into the array

//RECURSIVE METHOD

function fibsRec(n) {
  //base cases
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  //recursive cases
  let arr = fibsRec(n - 1);
  let sumArray = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(sumArray);
  return arr;
}

console.log(fibsRec(8));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
