/**
 * Created by Linh Ngo in 21/07/2017
 */

function talk () {
  console.log(this);
  console.log(this.sound);
}

const animal = {
  talk // bằng với talk: talk
}

const cat = {
  sound: 'meowwww!!!'
}

//cat.talk() // TypeError: cat.talk is not a function

// trỏ đến prototype animal
// dùng Object.setPrototypeOf() để demo -> k dùng trong thực tiễn 
// để tối ưu performance sử dụng Object.create()
Object.setPrototypeOf(cat, animal)
// lúc này JS không tìm thấy phương thức talk() của đối tượng cat 
// nhưng JS sẽ tiếp tục tìm kiếm trên chuỗi prototype của cat 
// trong animal tìm đc phương thức talk()
//cat.talk() // { sound: 'meowwww!!!' } // meowwww !!!

const crazyCat = {
  roar: function () {
    console.log(this.sound.toUpperCase());
  }
}

//crazyCat.roar() // this.sound lúc này là undefined
// trỏ đến prototype cat
// JS k tìm thấy sound ở crazyCat và sẽ tìm trên chuỗi prototype để tìm 'sound'

// Object.setPrototypeOf(crazyCat, cat)
// crazyCat.roar() // MEOWWWW!!!


// Example 2:
const food = {
  init: function (type) {
    this.type = type;
  },
  eat: function () {
    console.log('you eat ' + this.type);
  }
}

const sushi = Object.create(food) // tạo đối tượng sushi với prototype trỏ đến food
sushi.init('sushi')
sushi.eat()

// Object.create() thực tế không tạo ra 1 copy của food 
// mà chỉ link với food.prototype và ủy nhiệm cho food chạy các phương thức
const bbq = Object.create(food)

food.eat = function () {
  console.log('YOU EAT ' + this.type.toUpperCase());
}

bbq.init('bbq')
bbq.eat()

// thực tế sushi hay bbq chỉ là những object rỗng sử dụng food như 1 backup
// nếu có việc gì sushi hay bbq không làm đc thì ủy nhiệm (delegate) cho food làm  

// ví dụ nếu sushi có eat() của riêng nó
sushi.eat = function () {
  console.log('I eat sushi =^^= !!!!');
}
sushi.eat();
console.log(food.isPrototypeOf(sushi)) // true
const smallSushi = Object.create(sushi)
console.log(sushi.isPrototypeOf(smallSushi)); // true