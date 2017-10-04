// REST OPERATOR
// a more efficient way to handle unknown function parameters

// before if we have an unknown number of function parameters, we probably need to loop through the arguments object
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
sum(); // 0
sum(1); // 1
sum(1, 2, 3); // 6

// NOTES: arguments is not actual array. It's just an array-like object and we can't use array functions such as filter, reduce, etc.
function sumError() {
  return arguments.reduce((sum, next) => sum + next);
}
// sumError(1, 2, 3); // TypeError: arguments.reduce is not a function

// => Solve the problem with REST
function sumRest(...numbers) {
  return numbers.reduce((sum, next) => sum + next);
}
console.log(sumRest(1, 2, 3)); // 6

// REST operator can be used with other parameters but REST must stay at the end
function doMath(operator, ...numbers) {
  return `Operator is ${operator} & numbers array is ${numbers}`
}

console.log(doMath('add', 1, 2, 3));
// operator = 'add' (string) numbers = [1, 2, 3] (array)

// SPREAD OPERATOR
// It looks the same but its functionality is like opposite of REST
// It spreads or turns an array into a list of separate values

const numArr1 = [1, 2, 3];
const numArr2 = [4, 5, 6];

let testArr = [0, numArr1, numArr2]
// console.log(testArr)

const finalArr = [0, ...numArr1, ...numArr2];
// console.log(finalArr);

const addSpread = (a, b, c) => {
  return a + b + c;
}

// console.log(add(...numArr1)); 
// console.log(add(...numArr2));

// Compare REST and SPREAD
function add(...numbersToAdd) { // This is a Rest parameter
  return numbersToAdd.reduce((sum, next) => sum + next);
}

var numbers = [1, 2, 3];
add(...numbers); // this is a Spread operator
// The above is functionally the same as:
add(1, 2, 3);