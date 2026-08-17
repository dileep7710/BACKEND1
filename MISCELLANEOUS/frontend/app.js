// Constructors - doesn't return anything & start with capital
// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };

// let p1 = new person("adam", 25);


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);


// class Person {
//     constructor(name, age){
//         console.log("person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("student class constructor");
//         super(name, age); // parent class constructor is being called.
//         this.marks = marks;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age); // parent class constructor is being called.
//         this.subject = subject;
//     }
// }

// // let stu1 = new Student("adam", 25, 95);

class Mammal { //base class / parent
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal { // child
        constructor(name){
            super(name);
        }

        bark() {
            console.log("wooff...");
        }
}

class Cat extends Mammal { // child
        constructor(name){
            super(name);
        }

        meow() {
            console.log("meow...");
        }
}