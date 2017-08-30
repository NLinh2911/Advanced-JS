# Closure:

* Closure là khi hàm có thể truy xuất đến biến trong môi trường nó đc định nghĩa (lexical environment)
* Dù hàm có đc gọi ở một scope khác hay đc export và import ở 1 module khác thì hàm đó vẫn truy xuất đc đến các biến khi nó đc định nghĩa lúc đầu (lexical scope/environment)
* Trong JS, hàm đều là closure vì chúng đều có thể truy xuất và sử dụng các biến ở phạm vi ngoài hàm (outer scope)

```js
// example 1
const batman = 'Bruce Wayne'

function greetBatman () {
  return `Hello ${batman}`
}
console.log(greetBatman()) // Hello Bruce Wayne
```
* Example 1: hàm greetBatman() không nhận tham số đầu vào `batman` nhưng khi hàm đc gọi, nó vẫn có thể sử dụng biến `batman` bởi vì closure tồn tại.
  * closure cho phép hàm truy xuất phạm vi hoạt động ngoài nó (outer scope)
  * trong các ngôn ngữ không có closure, việc gọi hàm `greetBatman()` như trên là không đc

```js
// Example 2
function Person (nameParam) {
  let _name = nameParam; // _name là 1 private variable, chỉ tồn tại trong Person

  this.getName = function () { // getName() là 1 inner function
    return _name; // hàm getName sẽ nhớ biến _name
  }
}

const me = new Person ('Jack');
console.log(me); // Person { getName: [Function] }
let _name = 'Alohaaa'
// hàm getName() vẫn sẽ nhớ _name trong lexical scope cả nó - biến _name khi nó đc định nghĩa
console.log(me.getName()); // Jack
```  

* Example 2: hàm getName() là inner function nằm bên trong Person, nó là 1 closure vì nó có thể truy xuất đến môi trường bao ngoài nó (outer environment)
  * getName() nhớ biến `_name` khi nó đc định nghĩa, chứ không phải `_name` khi nó đc gọi