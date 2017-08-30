/**
 * Created by Linh Ngo in 20/07/2017
 */

// Example 1 
const batman = 'Bruce Wayne'

function greetBatman() {
  return `Hello ${batman}`
}
console.log(greetBatman()) // Hello Bruce Wayne

// Example 2

function Person (nameParam) {
  let _name = nameParam; // _name là 1 private variable, chỉ tồn tại trong Person

  this.getName = function () {
    return _name; // hàm getName sẽ nhớ biến _name
  }
}

const me = new Person ('Jack');
console.log(me); // Person { getName: [Function] }
let _name = 'Alohaaa'
// hàm getName() vẫn sẽ nhớ _name trong lexical scope cả nó - biến _name khi nó đc định nghĩa
console.log(me.getName()); // Jack

// Example 3:
// makeAdder(x) là 1 factory function nhận 1 tham số và trả về 1 hàm 
// hàm này sẽ cộng thêm giá trị x vào tham số đầu vào của hàm đc trả về này
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

// add5 và add10 đều là closure vì có truy xuất đến tham số x trong môi trường chúng đc định nghĩa (lexcial environment)
// 2 hàm có lexical environment khác nhau, 
const add5 = makeAdder(5); // x là 5
const add10 = makeAdder(10); // x là 10

console.log(add5(2)); // 7
console.log(add10(2)); // 12