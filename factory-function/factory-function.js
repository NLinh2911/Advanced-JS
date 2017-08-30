/**
 * Created by Linh Ngo in 21/07/2017
 */
// With a constructor
function MyObjectA() {}
MyObjectA.prototype = {
  myMethod: function () {}
};

var obj = new MyObjectA(); // {}
obj.myMethod(); // Prototype object acts on behalf of obj

// With a function
var proto = {
  myMethod: function () {}
};

function MyObjectB() {
  return Object.create(proto);
}

var obj = MyObjectB(); // {}
obj.myMethod(); // proto object acts on behalf of obj

// ES6 class
class MyObjectC {
  myMethod() {}
}
var obj = new MyObjectC(); // {}
obj.myMethod(); // Prototype object acts on behalf of obj


class Dog {
  constructor() {
    this.sound = 'woof'
  }
  talk() {
    console.log(this.sound)
  }
}

const puppy = new Dog()
puppy.talk() // woof
console.log(puppy.sound);

// Factory Function
const createDog = (soundParam) => {
  let sound = soundParam; // sound là 1 private variable
  return {
    talk: () => console.log(sound)
  }
}

const puppy2 = createDog('wooooooof');
puppy2.talk(); // wooooooof
console.log(puppy2.sound); // undefined 

// Functional Mixin: nâng cao hay mở rộng tính năng của 1 đối tượng
// Ví dụ có khả năng chơi bóng
// const createSuperDog = () => {
//   let superDog = createDog('SUPER WOOF');
//   superDog.superSkill = () => {
//       console.log('super dog to the rescue !!!');
//     }
//   return superDog
// }
const createSuperDog = () => {
  return Object.assign(Object.create(createDog('SUPER WOOF')), {
    superSkill: () => {
      console.log('super dog to the rescue !!!');
    }
  })
}

const superPuppy = createSuperDog()
console.log(superPuppy);
superPuppy.talk()
superPuppy.superSkill()