function helpfn(){
    
    console.log("wCat file_name =>displays content of the file");
    console.log("wCat file_name1 file_name2 file_name3... =>displays content of all the files");
    console.log("wCat -s file_name                        =>convert big line breaks into single");
    console.log("wCat -n file_name                        =>give numbering to all the lines");
    console.log("wCat -b file_name                        =>give numbering to non_empty lines");
    console.log(`wCat "file_name1 > file_name2"           =>put all the content of file_name1 into file_name2 by overriding and also created file_name2 if not exists`);
    console.log(`wCat "file_name1 >> file_name2"          =>append all the content of the file_name1 into file_name2`);
    console.log(`wCat -s "file_name1 > file_name2"        =>get the file content of file_name1 and remove large line break spaces and save output in file_name2`);
    
}


module.exports={
    helpfn:helpfn
}