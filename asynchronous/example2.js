// ====== Callback ========== 
// define our function with the callback argument
function getFullName(firstName, lastName, callback) {
  // this generates a random number between arg1 and arg2
  let fullName,
    err;
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    err = new Error('invalid name')
  }
  fullName = `${firstName} ${lastName}`;
  // then we're done, so we'll call the callback and pass our full name
  callback(err, fullName);
}

// call the function
getFullName('Alex', 'Winston', function (err, result) {
  // this anonymous function will run when the callback is called
  if (err) {
    console.log(err);
    return;
  }
  console.log(`callback called: ${result}`);
});

// ====== Promise ==========
const promise_getFullName = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    let fullName,
      err;
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
      err = 'Error: invalid name'
      reject(new Error(err))
    }
    fullName = `${firstName} ${lastName}`;
    resolve(fullName);
  })
}

promise_getFullName('Anna', 'Hathaway')
  .then(res => console.log(`Promise getFullName called: ${res}`))
  .catch(err => console.log(err))

// ====== Promise Chain==========
function getUserInfo(age, firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(age))) {
      err = 'invalid age input'
      reject(new Error(err))
    }
    promise_getFullName(firstName, lastName).then(res => {
      resolve(`${res} is ${age} years old.`)
    }).catch(err => {
      reject(new Error(err))
    })
  })
}

getUserInfo(22, 'Julia', 'Hanks')
  .then(res => console.log(`Promise chain getUserInfo called: ${res}`))
  .catch(err => console.log(err))

// ====== Async Await ==========
async function async_getUserInfo(age, firstName, lastName) {
  if (isNaN(parseFloat(age))) {
    throw new Error('invalid age input')
  }
  try {
    let name = await promise_getFullName(firstName, lastName);
    return `${name} is ${age} years old.`;
  } catch (err) {
    throw err;
  }

}

async_getUserInfo(19, 'Rose', 'Hills')
  .then(res => console.log(`Async await called: ${res}`))
  .catch(err => console.log(err))
