// "use strict";

//this keyword refers to the value of global object in globalSpace

//--This is global space
console.log(this); //=> windowObject

function x() {
  console.log(this); // -> refrence to windowObj if not Strict mode
  //-> Strict Mode - undefined
}

//this inside non-strict mode -(this substitution)

//when this->undefined or null
//this value get replaced with globalObj
//only in non-strict mode

// x();

const student = {
  name: "Abhishek",
  printName: function () {
    console.log(this);
  },
};

const student2 = {
  name: "Anurag",
  printName: function x() {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

const student3 = {
  name: "Ankit",
  age: 20,
};

student.printName();

student2.printName();

student2.printName.call(student3);
