# react-practice
Hello react

Note:

## Các bước cơ bản

* Tạo server
* File .jsx chứa các component React
* File .html show UI

## Component React

Trước khi demo một component cơ bản, ta cần include 1 số libs ể browser
có thể hiểu được component đó, có 3 libs được sử dụng:

* Babel-core: là compiler của JS, nó đọc file .jsx và compile ra JS thuần
* React: <chưa biết>
* React-dom: <chưa biết>
(2 libs react trên làm nhiệm vụ gen các component của React ra UI)

Mỗi component trong React được thể hiện bởi 1 class object. Attribute
quan trọng nhất chính là `render`, nó return về template của component
dưới dạng html kết hợp với cú pháp của React (embed các variable của JS)

```
    var Greeter = React.createClass({
        // ... attribute list
        render: function () {
            return {
                // ... template
            }
        }
    })
```

Tuy nhiên đó chỉ là khai báo component, nó vẫn chưa được expose ra ngoài,
lúc này ta cần có React-dom để nhét thằng này vào UI

```
    ReactDOM.render(
        <Greeter/>,
        document.getElementById('app')
    );
```

`<Greater/>` được coi như 1 custom html tag hoặc DOM, được inner vào trong
element có id là `app` (giống như JS document.getElementById('app').innerHtml = ...)

-> khá là đơn giản và dễ hiểu


Bước cuối cùng, include file .jsx chứa định nghĩa (khai báo) component
vào file html

```
    <script type="text/babel" src="app.jsx"></script>
```

, cũng cần chú ý về type của thẻ `<script>`, `text/babel` đánh dấu file
.jsx cần có babel dể compile trước khi để browser trực tiếp đọc nó

