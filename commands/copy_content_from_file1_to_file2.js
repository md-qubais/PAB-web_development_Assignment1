let fs=require("fs");
let path=require("path");
function readContent(src) {
    return fs.readdirSync(src);
}


function copy(f1,f2){
    let curr=process.cwd();    
    let child=readContent(curr);
    b=true;
   for(let i=0;i<child.length;i++){
       if(child[i]==path){
           b=false
           break;
       }
   }
   if(b){
    let createStream = fs.createWriteStream(path.join(curr,f2));
    createStream.end();
    console.log("file created successfully");
   }
   
fs.copyFileSync(path.join(curr,f1), path.join(curr, f2));
console.log("file copied successfully");
}

module.exports={
    copy:copy
}