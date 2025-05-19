import { readFile } from 'fs/promises';

export async function readSequential(paths){
    console.log("Reading file sequentially");
    const start = Date.now();
    let bytesSize = 0;
    for(const path of paths){
        const file = await readFile(path);
        bytesSize += file.byteLength;
    }
    const end = Date.now();
    const ms = end - start;
    
    return {
        ms,
        bytesSize
    }
    
}

export async function readParallel(paths){
    console.log("Reading file in parallel");
    const start = Date.now();
    const pathsPromises = paths.map(path=> readFile(path));
    const res = await Promise.all(pathsPromises);
    const bytesSize = res.reduce((acc, file) => acc + file.byteLength, 0);
    const end = Date.now();
    const ms = end - start;
    return {
        ms,
        bytesSize
    }
    
}
