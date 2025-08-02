//Microtask Queues.


// console.log("hello 1"); // synchronous

// process.nextTick(() => {
//     console.log("Nexttick 1");
// })  // asynchronous code


// console.log("hello 2"); // synchronous


// Promise.resolve()
// .then(() => console.log("Promise")) // Promise [MicoTask Que]

// process.nextTick(() => console.log("Next Tick")) // nextTick [MicroTask Que]

// Both are MicroTask Queues,But here NextTick has Top Priority So first it will Console "Next Tick".




//Task
// process.nextTick(() => console.log("Nextick1"))
// process.nextTick(() => {
//     console.log("NextTick2");
//     process.nextTick(() => console.log("NextTick Inside The NextTick 2"))
// })
// process.nextTick(() => console.log("NextTick 3"))


// Promise.resolve()
// .then(() => console.log("promise 1"))
// Promise.resolve()
// .then(() => {
//     console.log("promise 2");
//     process.nextTick(() => console.log("NextTick inside the Promise2"))
// })
// Promise.resolve()
// .then(() => console.log("promise 3"))


// Promise.resolve().then(() => {
//     console.log("Promise 1 -3");
//     Promise.resolve().then(() => console.log("Nested Promise 1-7"));
//   });

//   Promise.resolve().then(() => {
//     console.log("Promise 2 -4");
//     Promise.resolve().then(()=> console.log("Nested Promise 2-8"))
//   })
// Promise.resolve().then(() => {
//     console.log("Promise 3- 5");
//     process.nextTick(() => console.log("Nested NextTick -6"))
//   })
//   process.nextTick(() => {
//     console.log("Promise 4 - 1");
//     process.nextTick(() => console.log("Nested NextTick2- 2"))
//   })
  

//Timer Queues.

// setTimeout(() => console.log("1"),0)
// setTimeout(() => {
//   console.log("2")
//   process.nextTick(() => console.log("Timer Nested nextTick"))}
//   ,0)
// setTimeout(() => console.log("3"),0)




// process.nextTick(() => console.log("Nextick1"))
// process.nextTick(() => {
//     console.log("NextTick2");
//     process.nextTick(() => console.log("NextTick Inside The NextTick 2"))
// })
// process.nextTick(() => console.log("NextTick 3"))


// Promise.resolve()
// .then(() => console.log("promise 1"))
// Promise.resolve()
// .then(() => {
//     console.log("promise 2");
//     process.nextTick(() => console.log("NextTick inside the Promise2"))
// })
// Promise.resolve()
// .then(() => console.log("promise 3"))


// I/O Queues.

// const fs = require("fs");



// fs.readFile(__filename,() => console.log("ReadFile 1"))
// setTimeout(() => console.log("Timeout 1"),0)

// process.nextTick(() => console.log("NextTick"))

// Promise.resolve()
// .then(() => console.log("Promise"))

// setImmediate(() => console.log("Set Immeidiate"))


// for(let i=0;i<2000000;i++){}


//Check Queues.

const fs = require("fs");



fs.readFile(__filename,() => {
console.log("ReadFile 1")
setImmediate(() => console.log("Immideiate Inside the read"))
setTimeout(() => console.log("Timeout 1"),0)
process.nextTick(() => console.log("nextTick inside file op"))
Promise.resolve().then(() => console.log("Promise inside file op"))
})

process.nextTick(() => console.log("NextTick"))

Promise.resolve()
.then(() => console.log("Promise"))


// setImmediate(() => console.log("Set Immeidiate"))


for(let i=0;i<2000000;i++){}


// setImmediate(() => console.log("SetImmidiate 1"))
// setImmediate(() => {
//     console.log("SetImmidiate 2");
//     process.nextTick(() => console.log("NextTick Inside the setImmediate"))
//     Promise.resolve().then(() => console.log("Prmise Inside the setImmediate"))
// })
// setImmediate(()=>console.log("SetImmidiate 3"))


