// call, applpy, bind() methods

let student = {
  name: "Abhishek",
  age: 20,
};

let student2 = {
  name: "Anurag",
};

//function borrowing
let printName = function (state, sport) {
  console.log(this.name + ", " + state + ", " + sport);
};

//call method
// changing "this" refrence of printName() to student2(first argument)
printName.call(student, "Uttarpradesh", "Cricket");
printName.call(student2, "Uttarpradesh", "Cricket");

//apply method
// same as call only diff - takes arraList as second argument
printName.apply(student, ["MP", "football"]);

//Bind method
// it binds the function and returns a copy of function which we can invoke later
let printMyname = printName.bind(student, "uttrakhand", "chess");
printMyname();
