// function hello(){
//     console.log("hello");
// }



// function printName(){
//     console.log("Apna college");
//     console.log("Apna college");
// }

// function print1to5() {
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }


// function isAdult(){
//     let age = 17 ;
//     if(age >=18){
//         console.log("Adult");  
//     }
//     else {
//         console.log("not adult"); 
//     }
// }

// isAdult();


// function printPoem(){
//     console.log("Twinkle Twinkle little star");
// }

// printPoem();

// function rolldice(){
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
// }

// rolldice();

// function printinfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printinfo("Dileep",18);
// printinfo("dileep");

// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,4);
// sum(4,5);


// function calcAvg(a,b,c){
//     avg = (a+b+c)/2;
//     console.log(avg);
// }

// calcAvg(2,3,4);

// function printTable(a){
//     for(let i=a; i<=a*10; i=i+a){
//         console.log(i);
//     }
// }

// printTable(2);

// function isAdult(age){
//     if(age >= 18){
//         return "adult";
//     }
//     else {
//         return "not adult";
//     }
// }

// console.log(isAdult(13));

// function sumNum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum = sum + i;
//     }
//     return sum; 
// }

// console.log(sumNum(100));


// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//     let result = "  ";

//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }

//     return result;  
// }


// function outerfunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//     }
//     innerFunc();
// }


// function calSum(a, b) {
//     let sum = a+b;
//     calSum(2,3);
// }
//  console.log( Sum);


// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

// console.log(i);

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc(); 
//}

// let greet = "hello"; // global scope

// function changeGreet() {
//     let greet = 'namaste'; // function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet); // lexical scope
//     }
//     innerGreet();

// }
// console.log(greet);
// changeGreet();
    
// let name = "Dileep";

// let sum = function(a, b){
//     return a+b;
// }

// let hello = function(){
//     console.log("hello");
// }

// function multipleGreet(func, count){
//     for(i=1; i<=count; i++){
//         func();
//     }

// }

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet, 10);


            // function oddOrEvenFactory(request){
            //     if(request == "odd"){
            //         return function(n){
            //     console.log(n%2!=0);
            //     }

            //     } else if(request == "even"){
            //         return function(n){
            //             console.log(n%2 == 0);
            //         }
                
            //     } else {
            //         console.log("wrong request");
            //     }
            // }

            // let request = "odd"; 

            // const calculator = {
            //     num: 55,
            //     add: function(a, b){
            //         return a+b;
            //     },
            //     sub: function(a, b){
            //         return a-b;
            //     },
            //     mul: function(a, b){
            //         return a*b;
            //     },
            //     div: function(a, b){
            //         return a/b;
            //     }
            // }
   


// let arr = [5, 7, 8, 9, 4, 11, 13, 17];
// let num = 5;

// // elements larger than a number num

// function getElements(arr, num){
//     for(let i=0; i<=arr.length; i++){
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr, num);

// let str = "abcdabcdefggh";

// function getUnique(str) {
//     let ans = "";
//     for(let i = 0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }

//     return ans;
// }
 
// getUnique(str);


// const student = {
//     name: "Dileep",
//     age: 23,
//     eng: 54,
//     math: 43,
//     phy: 28,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
//}

// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// } catch(err) {
//     console.log("caught an error... a is not defined");
//     console.log(err);
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// const sum = (a, b) => {
//     console.log(a+b);
// };

// const cube = (n) => {
//     return n*n*n;
// }

// const pow = (a,b) => {
//     return a**b;
// }


// console.log("Hi there!");

// setTimeout(() => {
//     console.log("Apna College");
// },4000);

// console.log("Welcome to");

// let id = setInterval(() => {
//     console.log("Hi, Dileep");
// },2000);

// console.log(id);

// let id2 = setInterval(() => {
//     console.log("hello World");
// },3000);

// console.log(id2);

// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, // global scope
//     getName: function (){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); // parent's scope -> window
//         return this.marks;
//     },
//     getInfo1: function (){
//         setTimeout(() => {
//             console.log(this);
//         },2000);
//     },
//     getInfo2: function() {
//         setTimeout(function (){
//             console.log(this);
//         }, 2000);
//     }
// };


// const square = (n) => n*n;

// console.log(square(4));

// let id = setInterval(() => {
//     console.log("Hello World");
// },2000);

// setTimeout(() =>{
//     clearInterval(id);
//     console.log("Clear Interval run");
// }, 10000);

// const arrayAverage = (arr) => {
//     let total = 0;
//     for(let number of arr){
//         total += number;
//     }
//     return total / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayAverage(arr));

// let num = 4;

// const isEven = (num) => num % 2 == 0;

// const object = {
//     message: 'Hello, World!',

//     logMessage () {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);

// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback){
//         callback();
//     },
// };

// object.method(callback, 1, 2);


// let arr = [1,2,3,4,5];

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// let arr = [1,2,3,4,5];

// arr.forEach(function (el) {
//     console.log(el);
// });

// let arr = [{
//     name: "aman",
//     marks: 95
// },
// {
//     name: "Dileep",
//     marks: 70.9,
// },
// {
//     name:"rajat",
//     marks: 76
// },
// ];

// arr.forEach((student)=> {
//     console.log(student.marks);
// })


// let num = [1, 2, 3, 4];
// let double = num.map(function(el){
//     return el*2;
// }); 

// let nums = [1,2,3,4,5,6,7,8,9,10,11,12];
// let ans = nums.filter((el) => {
//     return el > 5; //even -> true, odd -> false

// });
    

// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal); 

//let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];

// let max = -1;

// for(let i=1; i<=arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]; 
//     }
// }
// console.log(max);

// let max = arr.reduce((max, el) =>{
//     if(max < el) {
//         return el;
//     }
//     else {
//         return max;
//     }
// });

// console.log(max);


// function getMin(nums){
//     let min = nums.reduce((min, el) => {
//     if(min < el){
//         return min;
//     }
//     else {
//         return el;
//     }
//  });
//  return min;
// }

// let nums = [10, 20, 30, 40, 5];

   

// let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr];

// let chars = "heloo";

// newChars = [...chars]; 

// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// const dataCopy = { ...data, id: 123, country: "India"};



// function sum(...args){
//     // arguments
//     for(let i=0; i<args.length; i++){
//         console.log("you have us: ", args[i]);
//     }
// }

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }

// function min(msg, ...args) {
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el) {
//             return el;
//         }
//         else {
//             return min;
//         }
//     })
// }

// let names = ["tony", "bruce", "peter", "steve","ytr", "abc"];

// let [winner, runnerup, secondRunnerup, ...others] = names;

// const student = {
//     name: "karan",
//     age: 14,
//     class: 9,
//     subjects: ["hindi", "english", "match", "science"],
//     username: "dileep@7710",
//     password: "abcd"
// };

// let {username: user, password: secret} = student;


// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// console.log(avg);

// let  = numbers = [2, 4, 6, 8, -2, -4];

// console.log(numbers.map((number) => number + 5));

// let string = ["Alice", "Bob", "Peter", "ironman"];

// console.log(string.map((string) => string.toUpperCase()));

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr, ...args.map((v) => v * 2),
// ];

// doubleAndReturnArgs([1, 2, 3], 4, 4);
// doubleAndReturnArgs([2],10, 4);


let mergeObjects = (obj1, obj2) =>({...obj1, ...obj2});

mergeObjects({a: 1, b: 2}, {c: 3, d: 4});