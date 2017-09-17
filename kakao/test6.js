//캐시크기가 꽉차있을 때, 지금들어있는 요소와 들어올 요소를 비교, 들어올 요소가 캐시안에 있다면 cache hit(+1), 없으면 cache miss(+5)
// 이때 가장 안쓴 인덱스 0 삭제
function citidata(data) {
  return data.toUpperCase();
}

function solution(cacheSize, cities) {
  var answer = 0;
  var stack = [];
  var hit = 1;
  var miss = 5;
  var total = 1;
  stack.push(citidata(cities[0]));
  for (var i = 1; i < cities.length; i++) {
    var index = 0;
    var flag = false;
    cities[i] = citidata(cities[i]);
      for (var j = 0; j < cacheSize; j++) {
        if (stack[i] == cities[i]) {
          total += hit;
          flag = true;
          index = j;
          break;
        }
      }
      if (flag) {
        stack.pop(index);
      } else {
        total+= miss;
        stack.pop(0);
      }
      stack.push(cities[i]);
      console.log(stack);
  }
  answer = total;
  return answer;
}

//console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));