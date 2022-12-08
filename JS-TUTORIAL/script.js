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



const loadScripts = (src) =>{
    return new Promise(function(resolve, reject){
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload = () =>{
            resolve("script is loaded");
        }
        script.onerror=()=>{
            reject(new Error("Couldn't load"));
        }
    })
}

let p1 = loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js").then(function()
{   console.log("first bundle loaded")
    return loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
}).then(function(){
    console.log("second bundle loaded");
}).catch(function(err){
    console.log(err);
})