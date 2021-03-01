function printGTree(node, nsp){

}
let fs = require("fs");
function checkFileorFolder(path){
    return fs.lstatSync(path).isFile();
}
function contentReader(path){
    return fs.readdirSync(path);
}







function printFlat(path){
    let isFile = checkFileorFolder(path);
    if(isFile == true){
        console.log(path, "*");
    }
    else{
        console.log(path);
        let childrens = contentReader(path);
        for(let i = 0 ; i < childrens.length ; i++){
            printFlat(path + "\\" + childrens[i]);
        }
    }
}
printFlat("FULL DIRECTORY PATH");