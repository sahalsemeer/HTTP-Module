const crypto = require("node:crypto")


// const start = Date.now();

// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");



// console.log(`HASH : ${Date.now() - start}`);

process.env.UV_THREADPOOL_SIZE = 16


const MAX_CALLS = 16;

const start = Date.now();

for(let i=0 ;i < MAX_CALLS; i++){
    crypto.pbkdf2("password","salt",10000,512,"sha512",() => {
        console.log(`HASH: ${i + 1}`,Date.now() - start);
    })
}


// const start1 = Date.now();

// crypto.pbkdf2("password","salt",10000,512,"sha512",() => {
//     console.log(`HASH:A`,Date.now() - start1);
// })
// crypto.pbkdf2("password","salt",10000,512,"sha512",() => {
//     console.log(`HASH:B`,Date.now() - start1);
// })
// crypto.pbkdf2("password","salt",10000,512,"sha512",() => {
//     console.log(`HASH:C`,Date.now() - start1);
// })


// const crypto = require("crypto");

// console.log("🟢 Start");

// crypto.pbkdf2("pass", "salt", 100000, 512, "sha512", () => {
//   console.log("🔐 Hash done (thread pool)");
// });

// // for (let i = 0; i < 1e9; i++) {} // Blocking loop

// console.log("🔴 End of blocking work");