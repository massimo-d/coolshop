const myArgs = process.argv.slice(2);
let file = myArgs[0];
let num = myArgs[1];
let key = myArgs[2];
let entireFile;
try{
    entireFile = require("fs").readFileSync(file, "utf8"); // all in one string
} catch(e){
    console.log("" + e);
    process.exit(0);
}
let lines = entireFile.split("\r\n"); // line by line
//record by record
for (let i of lines) {
    let r = i.split(",")[num];
    if (num == 3){
        if(r.startsWith(key)) console.log(i);
    }
    else 
        if (r === key ) console.log(i);
}
console.log("key is " + key);
