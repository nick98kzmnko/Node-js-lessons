import { readParallel,readSequential } from "./read.js";

const res1 = await readParallel(['a.txt','b.txt','c.txt'])
const res2 = await readSequential(['a.txt','b.txt','c.txt'])

console.log(`Parallel read took ${res1.ms} ms and read ${res1.bytesSize} bytes`);
console.log(`Squeential read took ${res2.ms} ms and read ${res2.bytesSize} bytes`);