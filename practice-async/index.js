import fetch from "node-fetch";

async function getFact(){
    try{
        const response = await fetch('https://catfact.ninja/fact')

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return {
            fact: data.fact,
            length: data.length
        }
    }catch(err){
        console.log("Error: ", err);
        throw err;
    }
}

async function mainParallel(){
        const promises = [getFact(), getFact(), getFact()];

    try{
        const results = await Promise.all(promises);
        console.log("Results: ", results);
    }catch(err){
        throw err;
    }
}
mainParallel();