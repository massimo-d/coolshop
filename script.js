const myArgs = process.argv.slice(2);
let file = myArgs[0];
let col = myArgs[1];
let key = myArgs[2];
let entireFile;

try{
    entireFile = require("fs").readFileSync(file, "utf8");
} catch(err){
    if (err.code === 'ENOENT') {
        console.log('File not found!');
        process.exit(0);
      } else {
        throw err;
      }
}

entireFile.split(/\r?\n/).forEach( line => {
    let r = line.split(",")[col];
    if (col == 3){
        if(r.startsWith(key)) console.log(line);
    }
    else 
        if (r === key ) console.log(line);
});
