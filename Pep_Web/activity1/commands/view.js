function viewHelper(dirName, mode){
    if(mode == "tree"){
        console.log("tree", dirName);
    }
    else if(mode == "flat"){
        console.log("flat", dirName);
    }
    else{
        console.log("wrong mode");
    }
}

module.exports = {
    fn : viewHelper
}