// GENERATOR
// A Generator has 2 parts: the generator function & the generator iterator
function *sample() {
  yield "first";
  yield "second";
  yield "last";
}

var it = sample();

var result = it.next();
console.log("the", result.value, "iteration");
// => “the first iteration”

result = it.next();
console.log("the", result.value, "iteration");
// => “the second iteration”

result = it.next();
console.log("the", result.value, "iteration");
// => “the last iteration”

// The power of generators allows you to haul a function process
// Async/await is built with promise and generator
