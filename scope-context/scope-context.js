/**
 * Created by Linh Ngo in 21/07/2017
 */

// =======SCOPE============
// batman là outer scope
const batman = 'Bruce Wayne'

function greet () {
  var sayHi = 'Aloha'; // sayHi là 1 biến trong greet(), inner scope
  return `${sayHi} ${batman}` // greet có thể sử dụng biến batman
}
//console.log(greet()); // Aloha Bruce Wayne
//console.log(sayHi); // ReferenceError: sayHi is not defined

// ========CONTEXT=======
// DEFAULT BINDING
// trong browser, this lúc này sẽ đc gán với window object
// chạy trên máy local/terminal, this là node object

function defaultThis () {
  console.log(this);
}
//defaultThis()
 
// hàm đc chạy -> 'this' context sẽ được gán với object mà nó nằm trong  
// lúc này mặc định defaultThis nằm trong 1 global object 


// IMPLICIT BINDING
// hàm trong object đc gọi -> this context đc tự động gắn với object bao nó

const myObj = {
  name: 'object lúc đầu',
  myFunc: function () {
    console.log(this); // 'this' lúc này là myObj
    console.log(this.name);
  }
}
//myObj.myFunc()

// EXPLICIT BINDING
// sử dụng apply, call, bind để gán context
// call hay apply sẽ chạy hàm ngay lập tức sau khi gán object
myObj.myFunc.call({}) // this lúc này là {}. this.name là undefined
myObj.myFunc.call({name: 'object gắn qua call'}, 1, 2);

myObj.myFunc.apply({name: 'object gắn qua apply'}, [1,2])

// bind thì trả về 1 copy của hàm đó nhưng với this đc gắn với context mới
// ví dụ dưới đây context mới chính là object ta truyền vào trong bind()
const bindFunc = myObj.myFunc.bind({name: 'object gắn qua bind'})
//bindFunc()

// Lưu ý: explicit binding k áp dụng nếu gán null hay undefined với call, apply hay bind vì những giá trị này sẽ bị bỏ qua

// 'NEW' BINDING
// 'this' đc gán với context của obj mới đc khởi tạo
function MarvelHero (name) {
  this.name = name;
  this.team = 'Marvel'
}

const ironMan = new MarvelHero('Iron Man')
// 'this' lúc này là object mới đc khởi tạo ironMan
// console.log(ironMan.name);
// console.log(ironMan.team);


// This context đc xác định lúc chạy hàm (runtime) k phải lúc định nghĩa 
function talk () {
  return `Hi ${this.name}` 
}

const jack = {
  name: 'Jack',
  jackTalk: talk
};
// this đc gán ở runtime không phải lexical scope
// dù hàm talk đc định nghĩa lúc đối tượng jack chưa đc khai báo
// khi gán thuộc tính talk của jack với hàm talk()
// khi chạy jack.talk() -> this vẫn đc gán với đối tượng jack
//console.log(jack.jackTalk()); // Hi Jack
jack.speak = talk;
let jackSpeaking = jack.speak
console.log(jack.speak());
console.log(jackSpeaking());

// Vấn đề với binding this: Implicit lost
const talk2 = jack.talk;
// lúc này talk2 trỏ đến hàm talk() đc định nghĩa lúc đầu và nó không có this context nào hết
// hàm talk2 không có liên quan gì hết đến đối tượng jack
//console.log(talk2()); // Hi undefined

// chúng ta có thể hiểu hàm talk2 như dưới đây
// const talk2 = function () {
//   return `Hi ${this.name}` // và lúc này this hoàn toàn không trỏ đc đến object nào hết
// }

// ====LEXICAL THIS WITH ARROW FUNCTION =======
function makeSound() {
  setTimeout(function() {
    // `this` ở đây đc xác định ở runtime lúc hàm makeSound() đc gọi
    console.log(this.sound);
  }, 100);
}

const dog = {
  sound: 'wooof'
};

//makeSound.call(dog); // undefined nếu dùng function(){} trong setTimeout

// dùng arrow function sẽ gán đc 'lexical this' -> this context đc gắn lúc hàm đc định nghĩa
function cook() {
  // return an arrow function
  return (food) => {
    // `this` ở đây trỏ đến đối tượng đc gán lúc định nghĩa
    console.log(this.food);
  };
}

var order1 = {
  food: 'sushi'
};

var order2 = {
  food: 'bbq'
};

const cookSushi = cook.call(order1);
cookSushi()
//cookSushi.call(order2); // 'sushi' k phải là 'bbq'

