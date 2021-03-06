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
    //file written successfully
  })
  
}

function read(src){
fs.readFile(src, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(data)
    let count=2;
    let content="1->";
    for(let i=0;i<data.length;i++){
        content+=data[i];
        if(data[i]=='\n'){
            content+=count+"->";
            count++;
        }
    }
    //console.log(content);
    write(src,content);
  })
}


function add_no_help(curr,src){
        
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

function add_no(src){
    let curr=process.cwd();
    add_no_help(curr,src);
}

module.exports={
    add_no:add_no
}
