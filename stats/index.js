import { readFileSynchronously, readFileCallback, readFilePromise } from "./stats.js";
console.log('readFileSynchronously:')
console.time('sync')
readFileSynchronously("data.txt");
console.timeEnd('sync')
console.log('----------------------------------')
console.log('readFileCallback:')
console.time('callback')
await new Promise(res=>{
    readFileCallback("data.txt",()=>{
            console.timeEnd('callback');
            res();
    });
})
console.log('----------------------------------')

console.log('readFilePromise:')
console.time('promise')
await readFilePromise("data.txt");
console.timeEnd('promise')