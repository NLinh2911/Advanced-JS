# Scope & Context
**Xem ví dụ scope-context.js**
* Scope === variable access (khi 1 đoạn code chạy, nó có thể truy xuất đến những biến nào)
* Context === this (khi 1 đoạn code chạy, `this` là gì)
* Có 4 quy luật để xác đinh `this` trong JS: thứ tự ưu tiên như dưới đây, lần lượt kiểm tra và dừng lại khi có 1 quy luật đc áp dụng
  1. New binding: Đối tượng đc khởi tạo với từ khóa `new`
   ```js
   const batman = new Hero()
   ```
  2. Explicit Binding: Hàm đc gắn context qua `call`, `apply` hoặc `bind` -> `this` trỏ đến đối tượng đc truyền vào qua `call`, `apply` hay `bind`
  ```js
  const speakEnglish = me.speak({language: 'English'})
  ```
  3. Implicit Binding: Hàm đc gọi từ đối tượng bao nó
  ```js
  const myName = me.sayMyName();
  ```
  4. Default Binding: nếu sử dụng `strict mode` khi không có quy luật nào bên trên đc áp dụng, `this` là `undefined` còn không thì sẽ là `global object` (đối tượng tổng window object trên browser)