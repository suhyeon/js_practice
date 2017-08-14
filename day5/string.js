var str = 'Hello World'; // str.length == 11

var res = str.substring(1, 4);
console.log(res);

res = str.substring(4, 1);
console.log(res);

res = str.substring(4);
console.log(res);

res = str.substring(-2);
console.log(res);

res = str.substring(1, 12);
console.log(res);

res = str.substring(11);
console.log(res);

res = str.substring(20);
console.log(res);

res = str.substring(0, str.indexOf(' '));
console.log(res);

res = str.substring(str.indexOf(' ') + 1, str.length);
console.log(res); 