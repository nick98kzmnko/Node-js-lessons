import { fileURLToPath } from "url";
import { dirname } from "path";
import { greet } from "./greet.js";
import {readFile} from "fs/promises";
console.log('Node version:', process.version);
console.log('Current dir  :', dirname(fileURLToPath(import.meta.url)));

const [,, name] = process.argv;

const code  = await readFile('./index.js', 'utf-8');
console.log(greet(name));
console.log('Lines in index.js:', code.split('\n').length);