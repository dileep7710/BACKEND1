// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i].src);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "yellow";
// }


// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm red!";
// document.querySelector('body').append(para1);

// para1.classList.add("red");

// let heading = document.createElement("H3");
// heading.innerText = "I'm blue";
// document.querySelector('body').append(heading);

// heading.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);


// div.classList.add("box");

// document.querySelector('body').append(div);

// let btn = document.createElement("button");
// let input = document.createElement("input");

// btn.innerText = "Click me";

// document.querySelector('body').append(input);
// document.querySelector('body').append(btn);

// Button.setAttribute("id", "btn");
// input.setAttribute("placeholder","username");

// document.querySelector('#btn');
// btn.classList.add("btnstyle");


// let para3 = document.createElement("p");
// para3.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector('body').append(para3);


// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM Practice</u>";

// document.querySelector("body").append(h1);

// h1.classList.add("purple");

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     alert("button was clicked");
// }

// function sayHello() {
//     alert("Hello");
// }

// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.onclick = sayHello;

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }

// function sayHello(){
//     alert("Hello");
// }

// function sayName(){
//     alert("Apna college");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.background = randomColor; 

//     console.log("color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random()* 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("parah was clicked");
// }); 

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);



// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event){
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function (event){
//     console.log(event);
//     console.log("button clicked");
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("code = ", event.code);
//     if(event.code == "keyU") {
//         console.log("character moves up");
//     }

//     else if(event.code == "keyD"){
//         console.log("Character moves down");
//     }

//     else if(event.code == "keyL"){
//         console.log("Character moves left");
//     }

//     else if(event.code == "keyR"){
//         console.log("character moves right");
//     }
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(){
//     event.preventDefault();
//     console.dir(form);

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//    console.log(user.value);
//    console.log(pass.value);

//    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
    
//});

// let user = document.querySelector("#user");

// user.addEventListener("change", function (){
//     console.log("input changed");
//     console.log("final value = ", user.value);
// });

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });

// let btns = document.querySelectorAll("button");

// btn.onclick = function(){
//     console.log("button was click");
// }

// for(btn of btns) {
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("you double clicked me");
//     });
// }

// function sayHello() {
//     alert("Hello");
// }

// function sayName() {
//     alert("Apna college");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random()* 255);
//     let green = Math.floor(Math.random()* 255);
//     let blue = Math.floor(Math.random()* 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor); 

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
//  });

// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log("changed event");
//     console.log("final value = ", this.value);
// })

// user.addEventListener("change", function(){
//     console.log("input event");
//     console.log("final value = ", this.value);
// })

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("div was clicked");
// })

// ul.addEventListener("click", function(){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of lis){
//     li.addEventListener("click", function(){
//     event.stopPropagation();
//     console.log("li was clicked");
// })

// }

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = " ";
// });

// ul.addEventListener("click ", function(event) {
//     if(event.target.nodeName == "BUTTON"){
//        let listItem = event.target.parentElement;
//        listItem.remove();
//        console.log("deleted ");
//     }
    
// });
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function(){
//         console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });

// }

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red" , "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(randBtn);
      console.log(randIdx);
    console.log(randColor);
    // random btn choose
    gameFlash(randBtn);
}

function checkAns(idx) {
if(userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length === gameSeq.length){
        setTimeout(levelUp, 1000);
    }
}
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;

        document.body.style.backgroundColor = "red";
        setTimeout(function() {
             document.body.style.backgroundColor = "white";

        },150);
        reset();
    }
 }


function btnPress() { 
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq. length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = []; 
    level = 0;
}
