// Promises

// A Promise that is handled immediately
const p1 = Promise.resolve('Resolve Me');

// then takes 2 optional arguments being first a callback
// for a success and another for failure
//p1.then((res) => console.log(`${res}`)).catch(err => console.log(err.message));

// Create a promise that executes after 2 seconds
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Resolve Me with setTimeout'), 2000);
});

//p2.then((res) => console.log(res)).catch (err => console.log(err.message));

// A promise with resolve and reject
const isHappy = false;
const p3 = new Promise(function (resolve, reject) {
  if (!isHappy) {
    let rejectResult = new Error('Not happy >"< !!!');
    reject(rejectResult);
  } else {
    resolve('Happy Me =^.^= !!!');
  }
})

p3.then(res => console.log(res)).catch(err => console.log(err.message))
