/**
 * Created by Linh Ngo in 20/07/2017
 */

// Template String

// example 1: concate string
const firstName = 'Jack';
const lastName = 'Daniel';

const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// example 2: calculate output
const num1 = 10;
const num2 = 20;

const sum = `Sum is ${num1 + num2}`
// console.log(sum);

// example 3: multi-line string
const multiLine = `This is a 
multi-line string
Use back tick`
// console.log(multiLine);

// ALTERNATE VALUES
let a = 1, b = 2;
[a, b] = [b, a]
// a = 2, b = 1

// DESTRUCTURING ASSIGNMENTS
const obj = { x: 7, y: 12, z: 'Hello' }
let {x, y, z} = obj 
// let x = 7; y = 12; z = 'Hello';
// console.log(x, y , z);

//
let list = [ 1, 2, 3 ]
let [ list0, , list2 ] = list
// let list0 = list[0]; list2 = list[2]
// console.log(list0, list2);

// DEFAULT ARGUMENTS
function math(x, y = 10) {
  console.log(x, y)
}

// math()