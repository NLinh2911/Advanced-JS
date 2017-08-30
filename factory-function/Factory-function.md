# Factory Function in JavaScript

* A factory function is when it returns an object
* Factory Function là hàm tạo và trả về objects
* Trong phần lớn trường hợp, ta có thể sử dụng `factory` thay vì `class`

### FACTORY FUNCTION: a function returns an object
```js
function createJelly () {
  return {type: 'jelly', colour: 'red', scoops: 3};
}

// use parameters to change the value of returned objects
function createIceCream(flavour = 'Vanilla') {
  return {type: 'icecream', scoops: 3, flavour}
}
```
### Composable Factory Function: 
* Break complex factories into smaller, reusable chunks dessert factory includes jelly and ice-cream factories from above
```js
function createDessert() {
  return {
    type: 'dessert',
    bowl: [createJelly(), createIceCream()]
  };
}
```
* with composable factories, we have create objects with **has-a** relationships instead of **is-a** relationships no need to mess aroung with 'new' and 'this'

### With inheritance
* A trifle **is a** dessert
```js
function Trifle() {
  Dessert.apply(this, arguments);
}

Trifle.prototype = Dessert.prototype;

// or
class TrifleClass extends Dessert {
  constructor() {
    super();
  }
}
```
### With Composition 
* A trifle **has** layers of jelly, custard and cream. It also **has** atopping.
```js
function createTrifle() {
  return {
    type: 'trifle',
    layers: [
      createJelly(), createCustard(), createCream()
    ],
    topping: createAlmonds()
  };
}
```
### ASYNC FACTORY factory returns a promise
```js
function getMeal(menuUrl) {
  return new Promise((resolve, reject) => {
    fetch(menuUrl).then(result => {
      resolve({
        type: 'meal',
        courses: result.json()
      });
    }).catch(reject);
  });
}
```
* break them into multiple distinct factories
```js
function getMeal(menuUrl) {
  return fetch(menuUrl)
    .then(result => result.json())
    .then(json => createMeal(json));
}

function createMeal(courses = []) {
  return {type: 'meal', courses};
}
```
* with promise.all
```js
function getWeeksMeals() {
  const menuUrl = 'jsfood.com/';

  return Promise.all([
    getMeal(`${menuUrl}/monday`),
    getMeal(`${menuUrl}/tuesday`),
    getMeal(`${menuUrl}/wednesday`),
    getMeal(`${menuUrl}/thursday`),
    getMeal(`${menuUrl}/friday`)
  ]);
}
```
* When we use factories -> we delibrately do not include methods. We should separate our data from computation can send objects as Json between sessions, http or websockets and put in data storage instead of a eatJelly() method
* inside jelly object we define an eat() method that receives jelly object as param

```js
function eat(jelly) {
  if (jelly.scoops > 0) {
    return {
      ...jelly,
      scoops: jelly.scoops - 1
    };
  } else {
    return jelly;
  }
}
```
* The old way with method inside object
```js
  import {createJelly} from './jelly';

  createJelly().eat();
```
* the new way
```js
  import {createJelly, eat} from './jelly';

  eat(createJelly());
```

### HIGH ORDER FACTORIES passing factories around as param in another function

```js
  function giveTimestamp(factory) {
    return (...args) => {
      const instance = factory(...args);
      const time = Date.now();
      return {time, instance};
    };
  }

  const createOrder = giveTimestamp(function(ingredients) {
    return {type: 'order', ingredients};
  });
```

* giveTimestamp() nhận tham số là 1 factory sau đó bao nó lại để tạo 1 factory mới trả về factory đầu với cộng thêm giá trị thời giantimestamp

