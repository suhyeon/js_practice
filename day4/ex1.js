var foo = function ( ) {

  var a = 3, b = 5;

  var bar = function ( ) {
    var b = 7, c = 11;

// 이 시점에서 a는 3, b는 7, c는 11

    a += b + c;
  console.log(a);
  console.log(b);
  console.log(c);
// 이 시점에서 a는 21, b는 7, c는 11

  };

// 이 시점에서 a는 3, b는 5, c는 not defined
  console.log(a);
  console.log(b);

bar();

// 이 시점에서 a는 21, b는 5
  console.log(a);
  console.log(b);
};
foo();