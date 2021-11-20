//PROMISES

//Hope for the best(.then/resolve) and be prepared for the worst(.catch/reject)

//resolve, reject, then ,catch, finally

function printAlpha(num, name, time){
    return new Promise ((resolve, reject)=>{
        if (num==2) {
            setTimeout(() => {
                console.log(name);
                resolve("Promise has been resolved")
            }, time);
        } else {
            console.log("Error");
            reject("Promise has been rejected")
        }
    })
}

//fat arrow functions 

function printVowels(){
    printAlpha(2,"Student", 2000)
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("DONE"))
}

printVowels()



//PROMISE  is a function which takes in two paramters, first is resolve and another is reject

//RESOLVE : if n completion of function you have got desired output then that means your promise has been resolved
// and its output you can handle in .then function 

//REJECT : if promise gets failed due to any scenario, then its error can be captured in .catch function

// function printAlpha(name, time){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(name);
//             resolve("Promise has been resolved")
//         }, time);
//     })
// }

//Promise Chaining
// function printVowels(){
//     printAlpha("A", 2000)
//     .then(()=>printAlpha("E", 5000))
//     .then(()=>printAlpha("I", 3000))
//     .then(()=>printAlpha("O", 4000))
//     .then(()=>printAlpha("U", 7000))
// }


// printVowels();

// async function printVowels(){
//     await printAlpha("A", 2000)
//     await printAlpha("E", 5000)
//     await printAlpha("I", 3000)
//     await printAlpha("O", 4000)
//     await printAlpha("U", 7000)
// }

// printVowels();