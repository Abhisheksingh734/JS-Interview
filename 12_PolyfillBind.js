let student = {
  name: "Abhishek",
};

let printName = function (state, age) {
  console.log(this.name + ", " + state + ", " + age);
};

let printMyName = printName.bind(student, "Up", 20);
printMyName();

//we want same functionality of bind method in myBind()

let student2 = {
  name: "Shivam",
};

// first we make myBind method accessible to everyObj by setting it to func prototype
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  //it returns a function that executes printName as it invokes
  //use apply for multiple args
  return function () {
    obj.apply(args[0], params);
  };
};

let printMyName2 = printName.myBind(student2, "Delhi", 20);
printMyName2();
