// ====== Callback ==========
// define our function with the callback argument
function callback_function(arg1, arg2, callback) {
  // this generates a random number between arg1 and arg2
  let result,
    err;
  if (isNaN(parseFloat(arg1)) || isNaN(parseFloat(arg2))) {
    err = new Error('invalid input')
  }
  result = parseFloat(arg1) + parseFloat(arg2);
  // then we're done, so we'll call the callback and pass our result
  callback(err, result);
}

// call the function
callback_function('ee', 15, function (err, result) {
  // this anonymous function will run when the callback is called
  if (err) {
    console.log(err);
    return;
  }
  console.log(`callback called: ${result}`);
});

// ====== Promise ==========
const promise_function = (arg1, arg2) => {
  return new Promise((resolve, reject) => {
    let result,
      err;
    if (isNaN(parseFloat(arg1)) || isNaN(parseFloat(arg2))) {
      err = 'Error: invalid input'
      reject(new Error(err))
    }
    result = parseFloat(arg1) + parseFloat(arg2);
    resolve(result);
  })
}

promise_function(2, 3)
  .then(res => console.log(`Promise called: ${res}`))
  .catch(err => console.log(err))

// ====== Promise Chain==========
function promise_chain(arg1, arg2, arg3) {
  return new Promise((resolve, reject) => {
    if (isNaN(parseFloat(arg1))) {
      err = 'invalid input'
      reject(new Error(err))
    }
    promise_function(arg2, arg3).then(res => {
      resolve(parseFloat(arg1) + res)
    }).catch(err => {
      reject(new Error(err))
    })
  })
}

promise_chain(10, 2, 3)
  .then(res => console.log(`Promise chain called: ${res}`))
  .catch(err => console.log(err))

// ====== Async Await ==========
async function async_await(arg1, arg2, arg3) {
  if (isNaN(parseFloat(arg1))) {
    throw new Error('invalid input')
  }
  try {
    let firstRes = await promise_function(arg2, arg3);
    return parseFloat(arg1) + firstRes;
  } catch (err) {
    throw err;
  }

}

async_await('ee', 2, 3)
  .then(res => console.log(`Async await called: ${res}`))
  .catch(err => console.log(err))