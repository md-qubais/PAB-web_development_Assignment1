let fs=require("fs");
let path=require("path");

function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}
function readContent(src) {
    return fs.readdirSync(src);
}

function read(src){
fs.readFile(src, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
}

function display_help(curr,src){
//    console.log(path.join(curr,src));
    let child=readContent(curr);
     b=true;
    for(let i=0;i<child.length;i++){
        if(child[i]==src){
            //display
            //console.log("display");
            read(path.join(curr,src));
            b=false
            break;
        }
    }
    if(b){
        console.log("file does not exists");
    }
}



function display(src){
    let curr_folder=process.cwd();
    for(let i=0;i<src.length;i++){
    display_help(curr_folder,src[i]);
    console.log();
    }
}



module.exports={
    display:display
}

