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
    console.log("renoved spaces and copied in file2 successfully"); 
  })

}
function read(src,f2){
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
    write(f2,content);
  })
}

function remove_spaces_help(curr,src,f2){
        
        let child=readContent(curr);
         b=true;
        for(let i=0;i<child.length;i++){
            if(child[i]==src){
                read(path.join(curr,src),f2);
            }
        }
      
    }

function remove_spaces_and_save(src,f2){
    let curr=process.cwd();
    remove_spaces_help(curr,src,f2);
}

module.exports={
    remove_spaces_and_save:remove_spaces_and_save
}






