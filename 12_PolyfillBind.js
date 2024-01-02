let student = {
  name: "Abhishek",
};

let printName = function () {
  console.log(this.name);
};

let printMyName = printName.bind(student);
printMyName();

//we want same functionality of bind method in myBind()

let student2 = {
  name: "Shivam",
};

// first we make myBind method accessible to everyObj by setting it to func prototype
Function.prototype.myBind = function (...args) {
  let obj = this;

  //it returns a function that executes printName as it invokes
  return function () {
    obj.call(args[0]);
  };
};

let printMyName2 = printName.myBind(student2);
printMyName2();
