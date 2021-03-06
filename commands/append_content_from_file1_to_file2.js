let fs=require("fs");
let path=require("path");
function readContent(src) {
    return fs.readdirSync(src);
}
function append(src,content){
    fs.appendFile(src,content, function (err) {
        if (err) throw err;
      });
}
function Append(f1,f2){
    let curr=process.cwd();
    fs.readFile(path.join(curr,f1), 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        append(path.join(curr,f2),'\n');
        append(path.join(curr,f2),data);
        console.log("file appended sucessfull");
      })     
}

module.exports={
    Append:Append
}