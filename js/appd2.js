// function hello() {
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx"); 
// demo();
// console.log("done, bye");

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// setTimeout(() =>{
//     console.log("apna college");
// },2000);

// console.log("hello....");

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
//   });
    
// }


// changeColor("red", 1000)
// .then(() => {
//   console.log("red color was completed");
//   return changeColor("orange", 1000);
// })

// .then(()=> {
//   console.log("orange color was completed");
//   return changeColor("green", 1000);
// })

// .then(() => {
//   console.log("green color was completed");
//   return changeColor("blue", 1000);
// })

// .then(() => {
//   console.log("blue color was completed");
// });

// changeColor("red",1000, () => {
//     changeColor("green",1000, () => {
//         changeColor("orange",1000);
//     });
// });

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savetoDb(
//     "Apna college",
// () => {
//     console.log("success : your data was saved :");
//     savetoDb("hello world", () => {
//         console.log("success2: data2 saved");
//     },
//     () => {
//         console.log("failure2: weak connection");
//     }
//   );
// },
// () => {
//     console.log("failure : weak connection. data not saved");
//  }
// );

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random() * 10) + 1; 
//       if(internetSpeed > 4) {
//         resolve("success : data was saved");
//       }
//       else{
//         reject("failure : weak connection");
//       }
//     });
//  }

// savetoDb("apna college")
//     .then((result) => {
//         console.log("data1 saved.");
//         console.log("result of promise: ", result);
//         return savetoDb("helloworld")
//         })
//         .then((result) => {
//           console.log("result of promise: ", result);
//             console.log("data2 saved");
//         })
//     .catch((error) =>{
//         console.log("promise was rejected");
//         console.log("result of promise: ", error);
//     });
   

// async function greet() {
//   // throw "some random error";
//   return "hello!";
// }

// greet()
// .then((result)=>{
//   console.log("promise was resolved");
//   console.log("result was : ", result);
// })
// .catch((err)=> {
//   console.log("promise was rejected with err : ", err);
// });

// let demo = async () => {
//   return 5;
// }

// function getNum() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) +1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });

// }

// async function demo() {
//   getNum();
//   getNum();
//   getNum();
// }

 

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click", async() => {
//      let link = await getImage();
//      console.log(link);
//      let img = document.querySelector("#result");
//      img.setAttribute('src', link);
// });

// // let url = "https://catfact.ninja/fact";

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   }
//   catch (e) {
//     console.log("error - ", e);
//     return "/";
//   }
// }




// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//   }
//   catch (e) {
//     console.log("error - ", e);
//   }
//   console.log("bye");
// }

const url = "https://icanhazdadjoke.com/";


async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json"} };
    let res = await axios.get(url, config);
    console.log(res.data);
  } catch(err) {
    console.log(err);
  }
}