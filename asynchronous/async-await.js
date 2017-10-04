// ASYNC AWAIT

// a long and hard to read callback workflow
function createEmployeeWorkflow(cb) {

  createEmployee(function (err, employee) {
    if(err) {
      return cb(err);
    }

    if (employee.needsManager()) {

      selectManager(employee, function (err, manager) {
        if(err) {
          return cb(err);
        }

        employee.manager = manager;
        saveEmployee(employee, function (err) {
          if(err) {
            return cb(err);
          }

          cb(undefined, employee);
        });
      });

    } else {

      saveEmployee(employee, function (err) {
        if(err) {
          return cb(err);
        }
        cb(undefined, employee);
      });

    }
  });
}

// A much more readable and clean workflow with async/await
async function createEmployeeWorkflow(cb) {
  var err;

  try {
    var employee = await createEmployee();

    if (employee.needsManager()) {
      var manager = await selectManager(employee);
      employee.manager = manager;
    }

    await saveEmployee(employee);
  } catch (ex) {
    err = ex;
  }

  cb(err, employee);
}

//

async function createEmployee() {
  return new Promise((resolve, reject) => {

    // do stuff here to create the employee
    var employee = // ...

    // now check if it worked or not
    if (/* some success case */) {
      resolve(employee);
    } else {
      reject(someError);
    }

  });
}

// Async function can be handled like a promise with .then()
function createEmployeeWorkflow(cb) {
  // createEmployee is an async function as above
  createEmployee().then((employee) => {

    // ... all the other code

    cb(null, employee);

  }).catch((ex) {return cb(ex);});

}