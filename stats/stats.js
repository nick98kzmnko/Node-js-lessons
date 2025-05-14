import * as fs from 'fs';

export function readFileSynchronously(filePath){
    try{
        const stats = fs.readFileSync(filePath, 'utf8');

        const results = [checkLines(stats), checkWords(stats), checkBytes(stats)];

        console.log("Lines: ", results[0]);
        console.log("Words: ", results[1]);
        console.log("Bytes: ", results[2]);
    }catch(err){
        console.error("Error reading file:", err);
    }
}
export function readFileCallback(filePath,callback){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.error("Error reading file:", err);
            return;
        }

           const results = [checkLines(data), checkWords(data), checkBytes(data)];

        console.log("Lines: ", results[0]);
        console.log("Words: ", results[1]);
        console.log("Bytes: ", results[2]);
        if (typeof callback === 'function') {
            callback();
        }
    })
}
export function readFilePromise(filePath){
   return fs.promises.readFile(filePath,'utf-8')
    .then(result=>{
         const results = [checkLines(result), checkWords(result), checkBytes(result)];

        console.log("Lines: ", results[0]);
        console.log("Words: ", results[1]);
        console.log("Bytes: ", results[2]);
    }).catch(err=>{
        console.error("Error reading file:", err);
    })
}
function checkLines(content){
    const lines = content.split('\n');
    return lines.length;

}
function checkWords(content){
    const words = content.split(/\s+/);
    return words.length;
    
}
function checkBytes(content){
    const bytes = Buffer.byteLength(content, 'utf8');
    return bytes;
}