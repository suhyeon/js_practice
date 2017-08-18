1. Ajax 통신 문제
```html
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="http://poiemaweb.com/assets/css/ajax.css">
  </head>
  <body>
    <div id="content"></div>

    <script>
      // 1. Ajax 통신을 위한 객체를 생성하는 생성자 함수로 통신하기 위한 객체를 생성
      // 2. data/data.html 비동기 방식 요청할 수 있도록 세팅하기
      // 3. 요청 보내기
      // 4. 이벤트 핸들러를 이용하여 응답이 완료 되고 응답의 내용이 성공했을 경우 <div id="content"></div> 내부에 내용을 추가하기
      // 5. 2 ~ 3 번을 data/data.json으로 비동기 방식으로 세팅해서 요청보내기
      // 6. 이벤트 핸들러를 이용하여 응답이 완료 되고 응답의 내용이 성공했을 경우 넘어온 data를 javascript 객체 형태로 만들어서 console.log()로 출력
    </script>
  </body>
</html>
```

2. Event 핸들링 문제
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    html, body { height: 100%; }
  </style>
<body>
  <p>A paragraph with a <button>button</button>.</p>
  <script>
    // body를 클릭했을 때 console.log('body')
    // p를 클릭했을 때 console.log('p')
    // button를 클릭했을 때 console.log('button')
    // 위와 같이 실행 된다.
    // 버튼을 클릭 했을 때 콘솔에
    // body
    // button
    // p
    // 순서로 출력 되도록 작성하기
  </script>
</body>
</html>
```