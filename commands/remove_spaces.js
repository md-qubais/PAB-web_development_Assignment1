let fs=require("fs");
let path=require("path");
function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}
function readContent(src) {
    return fs.readdirSync(src);
}
function write(src,content){
fs.writeFile(src, content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(content);
    console.log("renoved spaces sucessfully"); 
  })

}
function read(src){
fs.readFile(src, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    let content="";
    let c="";
    for(let i=0;i<data.length;i++){
        if(data[i]!='\n' && data[i]!='\r'){
            c+=data[i];
        }
        if(data[i]=='\n' || data[i]=='\r'){
            if(c!=""){
                content+=c+'\n';
            }
             c="";
        }
    }
    if(c!=""){
        content+=c;
    }
    write(src,content);
  })
}

function remove_spaces_help(curr,src){
        
        let child=readContent(curr);
         b=true;
        for(let i=0;i<child.length;i++){
            if(child[i]==src){
                read(path.join(curr,src));
                b=false
                break;
            }
        }
        if(b){
            console.log("file does not exists");
        }
    }

function remove_spaces(src){
    let curr=process.cwd();
    remove_spaces_help(curr,src);
}

module.exports={
    remove_spaces:remove_spaces
}






