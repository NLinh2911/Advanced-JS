# Prototype Inheritance vs Class Inheritance 
**Xem ví dụ prototype.js**
* Class === blueprint. Blueprint có thể hiểu là 1 bản thiết kế khuôn mẫu, ví dụ ta dựa vào bản thiết kế của một ngôi nhà để xây nên các ngôi nhà tương tự
* Prototype: cách JS kết nối các object

* [Bài viết hay về prototype](https://kipalog.com/posts/prototype-la-khi-gi-)

## ES6 Class ≠ Class trong các ngôn ngữ OOP
* Từ khóa `class` trong ES6 chỉ là syntax kiểu mới, dù sử dụng `class` nhưng thực tế JS vẫn xử lý `prototypal inheritance` chứ không phải là `classical inheritance`
```js
class Foo {}
typeof Foo // 'function'
// có thể thấy `class` không tồn tại trong JS
```
* JS không phải là 1 ngôn ngữ phụ thuộc vào class và không hoạt động giống các ngôn ngữ OOP khác
* Khi một đối tượng đơn thuần kế thừa từ 1 class kiểu `classical inheritance` thi mối quan hệ đối tượng con vs đối tượng cha là `is-a`
  * `Classical inheritance` thì class như là 1 blueprint hay khuôn mẫu cho các đối tượng con. Đối tượng con như là copy khuôn mẫu
  
  * `Prototypal inheritance` - từ này dễ gây nhầm lẫn vì thực tế cơ chế là `behaviour delegation`: vì đối tượng mới đc tạo không phải là bản copy của 1 khuôn mẫu đối tượng cha nào hết mà đối tượng mới đc `prototype linked` hay liên kết vs các đối tượng khác. `Delegate` nghĩa là **ủy nhiệm**. Nếu 1 đối tượng k có 1 phương thức, JS sẽ tìm trên chuỗi prototype và ủy nhiệm cho đối tượng nào cao hơn có phương thức này để gọi phương thức
  * Các đối tượng k phải là quan hệ kế thừa cha con cứng nhắc. Mà được liên kết hay nối với nhau, 1 prototype object có thể đc ủy nhiệm và thực hiện 1 phương thức nào đó.
  * Ví dụ object sushi ở dưới đây đc nối với prototype object là food
  ```js
    const food = {
      init: function (type) {
        this.type = type;
      },
      eat: function () {
        console.log('you eat ' + this.type);
      }
    }

    const sushi = Object.create(food) 
  ```
  * Nếu chúng ta thay đổi thêm 1 prototype phương thức cho `Object` thì tất cả các đối tượng sẽ có phương thức này, hoặc nếu thay đổi phương thức sau khi đối tượng con đc tạo ra thì khi đối tượng con gọi phương thức đó, phương thức mới đc thay đổi sẽ đc gọi
  ```js
  const sayHello = 'Hellooooooo';
  sayHello.toUpperCase();
  // dù sayHello không trực tiếp định nghĩa toUpperCase()
  // nhưng đối tượng trên nó chính là kiểu String
  // String.prototype.toUpperCase() là 1 hàm tồn tại cho tất cả các biến dạng String kế thừa
  ```

## Object.create(): cách tạo object với prototype là 1 object khác
* Phương thức tạo object này tuân thủ JS logic về `prototype` hơn là `new`
* Từ khóa `new` gần giống tạo 1 đối tượng con của 1 class trong OOP nhưng JS không tạo copy của 1 class như OOP  