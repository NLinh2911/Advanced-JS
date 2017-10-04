# Async/Await thực tế là các promises

* Mỗi hàm `async` sẽ trả về 1 promise. Khi `await` kết quả nhận đc chính là kết quả của promise 

* Promise hứng kết quả dù đã đc trả về hay sẽ đc trả về trong tương lại trong phần `then()`

* Với `async/await` ta có thể viết code nhìn kiểu đồng bộ, nên để bắt lỗi thì dùng `try/catch`
```js
async function getFirstUser() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}
```

# Bluebird

## Promisify: chuyển đổi 1 callback sang promise

```js
const Promise = require('bluebird')
const fs = require('fs')

const readFileAsync = Promise.promisify(fs.readFile)

readFileAsync(filepath)
  .then((data) => {
    console.log(data.toString())
  })
  .catch((err) => {
    console.error(err)
  })
```

## PromisifyAll: thêm phiên bản 'promise' cho tất cả các hàm. Phiên bản mới của hàm có thêm đuôi tên 'Async'

```js
const Promise = require('bluebird')
const fs = require('fs')

Promise.promisifyAll(fs)

readFileAsync(filepath)
  .then((data) => {
    console.log(data.toString())
  })
  .catch((err) => {
    console.error(err)
  })
```

## Promise.all(): nhóm nhiều promises -> chạy logic trong then() khi tất cả promise trong mảng Promise.all([...]) hoàn thành

```js
Promise.all([findUser(), findProduct()])
  .spread(function(user, product) { // trả về kết quả của mảng promise theo thứ tự
    return {user: user, product: product}
  })
```

## Promise.map(): chuyển 1 mảng sang promises và sử dụng .all()

```js
// Chuyển đổi việc tạo 1 mảng promises sau đó gọi Promise.all()
var promises = [];
for (var i = 0; i < fileNames.length; ++i) {
    promises.push(fs.readFileAsync(fileNames[i]));
}
Promise.all(promises).then(function() {
    console.log("done");
});

// Using Promise.map:
Promise.map(fileNames, function(fileName) {
    // Promise.map awaits for returned promises as well.
    return fs.readFileAsync(fileName);
}).then(function() {
    console.log("done");
});
```

```js
Promise.map(cart, (item) => {
  return findProduct(item.id)
}).then(() => {
  console.log('Found all products in cart')
}).catch(err => {
  console.error(err)
})

// Đặt concurrency là 2 thì sẽ luôn chỉ có 2 promises chạy 1 lúc
// nếu 1 trong 2 cái hoàn thành thì gọi 1 cái nữa
Promise.map(cart, (item) => {
  return findProduct(item.id)
}, {concurrency: 2}).then(() => {
  console.log('Found all products in cart')
}).catch(err => {
  console.error(err)
})

```

## Promise.mapSeries() = Promise.map() với {concurrency : 1}: chạy lần lượt qua từng promise