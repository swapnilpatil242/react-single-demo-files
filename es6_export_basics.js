class App {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
  displayName() {
    console.log("displayName :", this.first_name, this.last_name);
  }
  userWelcome() {
    this.displayName();
  }
}

var user1 = new App("swapnil", "patil");
// user1.displayName();
user1.userWelcome();
/*-----------------------------------------------------------*/

//Example 2 : Inheritance
class Shape {
  constructor(id) {
    console.log("shape constructor: ", id);
    this.id = id;
  }
}
class Circle extends Shape {
  constructor(id, radius) {
    super(id); //assign to shape
    this.radius = radius;
  }
}
var firstCircle = new Circle(1, 2.5); 
console.log("Inheritance class o/p: ", firstCircle.id, firstCircle.radius);

// o/p ::
/*
displayName : swapnil patil
shape constructor:  1
Inheritance class o/p:  1 2.5
*/

/*-----------------------------------------------------------*/

// Example 3: 
// hash and array or spered operator 
let obj1 = {A: 10, B: 20}
let obj2 = {A: 11, B: 22}

// just create refer, if obj1 0r obj3 changed then both will be changed
let obj3 = obj1;
obj3.A = 30;
obj1.B = 40;
console.log("references obj1: ", obj1);
console.log("references obj3: ", obj2);

// This will create new object with clone, And after changed obj1, obj4 will not be reflect 
let obj4 = Object.assign({}, obj1);
//OR 
// let obj4 = {...obj1, C:60, ...obj2}; // we can merge multi obj and also appened new value 

obj1.A = 55;
console.log("references after clone obj1: ", obj1);
console.log("references clone obj obj4: ", obj4);
// O/P
/*
references obj1:  {A: 30, B: 40}
es6_basics.js:54 references obj3:  {A: 11, B: 22}
es6_basics.js:59 references after clone obj1:  {A: 55, B: 40}
es6_basics.js:60 references clone obj obj4:  {A: 30, B: 40}
*/


// Example 4: Array 
// example 3 same as for array just change the culry brackets to square brac.
// One imp diff example3 cloning and appending sepquence not fix but example 4 for array its same


// Example 5:
