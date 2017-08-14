var nums = [25,27,59,62,36];

var points = nums;
points.sort(function (a,b) {return b-a;});

console.log(nums);
console.log(points);

var exam = [1, 13,5,6,789];
var sum = exam.slice();

sum.sort(function (a,b) {return b - a;});

console.log(exam);
console.log(sum);

