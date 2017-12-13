const myObj = {
  name: 'object lúc đầu',
  myFunc: function () {
    console.log(this); // 'this' lúc này là myObj
    console.log(this.name);
  }
}

// ví dụ có 1 cái event handler
function myObjEvent(myObj) {
  setTimeout(myObj.myFunc.bind(myObj), 3000)
}
myObjEvent(myObj)