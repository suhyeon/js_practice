1. DOM tree 종류 4가지를 서술하시오
- 문서 노드 : 최상위 노드, 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서노드를 통해야 한다. 즉 dom트리에 접근하기 위한 시작점
- 요소노드 : html요소를 표현한다. 문서의 구조를 서술한다.
- 어트리뷰트 노드 : html요소의 어트리뷰트를 표현한다. 해당 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현된다.
- 텍스트 노드 : html 요소의 텍스트를 표현한다. 요소노드의 자식이며 자신의 자식노드를 가질 수 없다.

--- 

문제코드
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Cities</title>
</head>
  <style>
    body{
      width: 100%;
    }
    .wrapper {
      margin: auto;
      box-sizing : border-box;
    }
    .main { 
      list-style: none;
      padding: 0;
    }
    h1 {
      font-size: 50px;
    }
    .head {
      margin-top: 20vh;
      text-align: center;
    }

    /* 추가요소 */
    .text {
      font-size: 30px;
      font-weight: 300;
      color: rgb(80,80,80);
    }

    .red  { color: red; }
    .blue { color: blue; }
    .green { color: green;}
    .gray { color: gray;}
  </style>
<body>
  <!-- wrapper 시작 -->
  <div class="wrapper">
    <div class="head">
        <h1>Cities</h1>
        <ul class="main">
          <li id="one" class="red">Seoul</li>
          <li id="two" class="red">London</li>
          <li id="three" class="red">Newyork</li>
          <li id="four">Tokyo</li>
        </ul>
    </div>
  </div>
  <!-- wrapper 종료 -->
  <script>
  
  </script>
</body>
</html>
```


2. `id = one` 으로 접근하여 `className`을 `gray`로 변경하시요.

var two = document.getElementById('one');
two.className = 'gray';

3. `qureSelectorAll`을 사용하여 `class = "red"`를 `green`으로 변경하시요. (for문)

var red = document.querySelectorAll('.red'),i;
for(i = 0; i < red.length; i++){
  red[i].className = 'green';
}

4. `id = four`에 대해 `setAttribute`을 사용하여 `class = "blue"`를 추가하시오.

var four = document.getElementById('four');
four.setAttribute('class','blue');

5. `<h1>`태그와 `<ul>`태그 사이에 `<p class="text">Daliy Quiz</p>` 를 추가하시오. (insertAdjacentHTML() 사용)

var insert = document.getElementsByTagName('ul')[0];
insert.insertAdjacentHTML('beforebegin', '<p class="text">Daliy Quiz</p>');

6. `li`요소 중 마지막 요소를 삭제 하시오.

var ul = document.getElementsByClassName('main')[0];
var lastChild = ul.childNodes[ul.length-1];
ul.removeChild(lastChild);