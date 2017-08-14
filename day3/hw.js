// 정삼각형 만들기 (*)를 이용해서 만들어서 함수화해 만들어오기

//비어있는 tree 스트링 선언
var tree ='';
var line ;
//newTree변수에 number 파라미터를 가진 함수를 할당.

var newTree = function(line){ //line(줄 수)만큼의 정삼각형을 한줄씩 출력하는 함수

  //0부터 입력받은 line만큼 1씩증가시켜서 루프를 돌게하는 반복문
  for (var i = 0; i < line; i++){

    //정삼각형의 space
    for(var j = line; j > i+1; j--){ //line부터 i만큼 1씩 감소시켜서 루프를 돌게하는 반복문

      tree += ' '; //tree 스트링에 space 병합 선언
    }

    //정삼각형의 마지막 line의 space을때까지 그리기
    for(var k = 0; k < (i+1)*2-1; k++){ //i가 0부터 1씩 증가시켜서 루프를 돌게 하는 반복문(*의 홀수개 출력이 목적)

      tree += '*'; //tree 스트링에 *병합 선언
    }
    tree += '\n'; //tree 스트링에 개행 병합 선언
  }
  //루프가 끝나면 출력
  console.log(tree);
}
//함수 호출(argument = 8)
newTree(8);