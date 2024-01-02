//function currying -> a way to transform a function from f(a,b,c) to f(a)(b)(c)
//1) using bind method
//2) using closures

// using bind method
let add = function (x, y) {
  console.log(x + y);
};

let addTwo = add.bind(this, 2);
addTwo(3);

// using closures
let multiply = function (x, y) {
  return function (y) {
    console.log(x * y);
  };
};

let mulitiplyByTwo = multiply(2);
mulitiplyByTwo(3);
