// function loadScripts(filename, callback) {
//     let script = document.createElement('script');
//     script.src = filename;
//     script.onload = function(){
//         console.log("Script loaded" + filename);
//         callback(filename);
//     }
//     document.body.appendChild(script);
// }

// function goodNight(name) {
//     alert("Good night!" + name);
// }

// function goodEvening(name) {
//     alert("Good evening!" + name);
// }
// loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//     alert("Good night!" + name);

//     loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//         alert("Good night!" + name);

//     })
//     loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//         alert("Good night!" + name);

//     })
//     loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//         alert("Good night!" + name);

//     })
//     loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//         alert("Good night!" + name);

//     })
//     loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//         alert("Good night!" + name);

//     })
//     loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//         alert("Good night!" + name);

//     })
//     loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
//         alert("Good night!" + name);

//     })})

// console.log("Hello aryan!");
// setTimeout(function() {
//     console.log("Good night!");
// },3000);
// console.log("Good morning!");

// let promise = new Promise(function(resolve, reject) {
//     alert("hello raghav!");
//     resolve(45);
// });

// console.log(promise);

// let promise = new Promise(function(resolve, reject) {
//     console.log("Promise is pending...");
//     setTimeout(function() {
//         // console.log("Promise is resolved!");
//         resolve(true);
//         // reject(new Error("Promise is rejected"));
//     },3000)
// })
// console.log(promise);

// let promise2 = new Promise(function(resolve, reject) {
//     console.log("Promise is pending...");
//     setTimeout(function() {
//         // console.log("Promise is rejected");
//         // resolve(true);
//         reject(new Error("Promise is rejected"));
//     },3000)
// })
// console.log(promise);

// promise.then(function(value) {
//     console.log(value);
// })

// promise2.catch(function(error){
//     console.log("some error");
// })

// const loadScripts = (src) =>{
//     return new Promise(function(resolve, reject){
//         let script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () =>{
//             resolve("script is loaded");
//         }
//         script.onerror=()=>{
//             reject(new Error("Couldn't load"));
//         }
//     })
// }

// let p1 = loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js").then(function()
// {   console.log("first bundle loaded")
//     return loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
// }).then(function(){
//     console.log("second bundle loaded");
// }).catch(function(err){
//     console.log(err);
// })

// let p1 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve("promise 1 is resolved!");
//     },11000);
// })

// let p2 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         reject(new Error());
//         // resolve("promise 2 is resolved!");
//     },2000);
// })
// let p3 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve("promise 3 is resolved!");
//     },3000);
// })

// let promiseAll = Promise.all([p1,p2,p3]);
// promiseAll.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })

// let promiseSettled = Promise.allSettled([p1,p2,p3]);
// promiseSettled.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })

// let promiseRace = Promise.race([p1,p2,p3]);
// promiseRace.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })

// let promiseAny = Promise.any([p1,p2,p3]);
// promiseAny.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })

// let promiseResolve = Promise.resolve([p1,p2,p3]);
// let promiseResolve = Promise.resolve(6)
// promiseResolve.then((value) =>{
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })

// let promiseReject = Promise.reject(new Error());
// let promiseReject = Promise.reject([p1,p2,p3]);
// promiseReject.then((value) =>{
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })

// async function calling(){
//     let t1 = setTimeout(() =>{
//         console.log("Hii I am Timeout! 1");
//     }, 0000)

//     let t2 = setTimeout(() =>{
//         console.log("Hii I am Timeout! 2");
//     },1000)
//     return [t1,t2];
// }
// calling()
// console.log(calling()); that is how we check if function returns  a promise or not.

// async function getValue() {
//   // wait for the value variable to be resolved
//   const value = await someAsyncOperation();

//   // once the value is resolved, use it in the rest of the function
//   return doSomethingWith(value);
// }

// async function main() {
//   // wait for the getValue function to resolve
//   const result = await getValue();

//   // use the result of the getValue function
//   console.log(result);
// }



// try{
//     console.log(hello);
// }
// catch(e){
//     console.error("Error: " + e.message);
// }
// finally{
//     console.log("Hello this program always run !")
// }

// console.log("Script is running properly")

// try and catch is used to hhandle exceptions  or errors but if we get error in catch block then progem doesnot run 
// but after finally it always runs


// console.log(document.cookie);
// document.cookie = "name=aryan";
// document.cookie = "1=2";
// document.cookie = "2=3";
// // let prompt1 = prompt("Please enter a key");
// // let prompt2 = prompt("Please enter a value");
// document.cookie = `${encodeURIComponent(prompt1)} = ${encodeURIComponent(prompt2)}`;
// // if user enter a special key and value then we use decodeURIComponent to decode it.
// // console.log(decodeURIComponent(prompt1));
// console.log(document.cookie);


// let arr = [3,5];
// let [a,b] = arr;
// console.log(a,b);
// let arr = [3,5];
// let [a,b,c] = arr;
// console.log(a,b,c); gives 3,5,undefined bcz value of c is not defined in arr

// let arr = [3,5,9];
// let [a,b,c] = arr;
// console.log(a,b,c);


// let arr = [3,5,10,11,12,13];
// let [a,b,c,...rest] = arr;
// console.log(a,b,c,rest); gives 3,5,10 in one array and remaining in another array


// let arr = [3,5,8,9,0,7,5];
// let [a,b,...r] = arr;
// console.log(a,b,r); can use any variable instead of rest it means writing rest is not compulsory


// let arr = [3,5,9,0,6,7,8];
// let [a,b, , ,...rest] = arr;
// console.log(a,b,rest); it skips 9 and 0 and remainig stores the rest array. a = 3,b=5,rest=[6,7,8]

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}
// let {a,b,c,d,e} = obj;
// console.log(a,b,c,d,e);


// let arr1 = [1, 2, 3, 4, 5]
// let obj1 = {...arr1}
// console.log(obj1)

// const sum = (a,b,c,d,e) =>{
//     return a + b+c + d + e;
// }
// console.log(sum(...arr1));


// let obj2 = {
//     name:'aryan',
//     class:'cs',
//     read:'js'
// };

// console.log({...obj2, name:'raghav'});
// console.log({name:'raghav',...obj2}); this will not change any values from obj2