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
    console.log("file written sucessfull");
   })

}
function read(src){
fs.readFile(src, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    let count=1;
    let content="";
    let c="";
    for(let i=0;i<data.length;i++){
        if(data[i]!='\n' && data[i]!='\r'){
            c+=data[i];
        }
        if(data[i]=='\n' || data[i]=='\r'){
            if(c==""){
                content+='\n';
            }else{
                content+=count+"."+c+'\n';
                count++;
            }
            c="";
        }
    }
    if(c!=""){
        content+=count+"."+c;
    }
    write(src,content);
  })
}

function add_number_not_to_space_help(curr,src){
        
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

function add_number_not_to_space(src){
    let curr=process.cwd();
    add_number_not_to_space_help(curr,src);
}

module.exports={
    add_number_not_to_space:add_number_not_to_space
}






