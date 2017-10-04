// define a function that increments a counter in a loop
function closureExample() {

  // var i = 0;

  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log('counter value is ' + i);
    }, 1000);
  }
  console.log(i)

}
// call the example function
closureExample();