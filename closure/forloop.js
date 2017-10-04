// ==== What happens here? What are outputs? ======
// var is actually in function scope because of hoisting - the same scope as the for loop (check forloop2 to see another example)
// console.log('Start: ' + i)
// for (var i = 0; i < 3; i++) {
//   console.log('Loop:', i);
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
// console.log('Final i: '+ i);
// ==== Use IIFE ====
// for (var i = 0; i < 3; i++) {
//   (function (x) {return setTimeout(function () {
//     console.log(x);
//   }, 0)})(i);
// }

// ==== Use let to define block scope of iterator i ====
// let scope is inside the {} block - so setTimeout has reference access to i in its lexical scope
// console.log('Start: ' + i)
// for (let i = 0; i < 3; i++) {
//   console.log('Loop  '+ i);
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
