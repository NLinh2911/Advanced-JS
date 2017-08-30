function* gen() {
  let x = yield 10;
  console.log(x);
}

// not like invoking a function, assigning a generator like this won't fire it
const myGen = gen();
// myGen is only set up ready
// to start the generator
// the first next, we pass back 10 and pause at 'yield' keyword
console.log(myGen.next()); // { value: 10, done: false }
// 10 is passed back to us but the generator is not yet finished

// the second next call, the generator is finished
// but no more value is passed back
console.log(myGen.next()); // { value: undefined, done: true }
