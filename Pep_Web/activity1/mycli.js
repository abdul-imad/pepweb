let helperFile = require("./commands/help");
let viewFile = require("./commands/view");
let organiseFile = require("./commands/organise");

let input = process.argv.slice(2);
let command = input[0];

switch(command){
    case "view":
        viewFile.fn(input[1], input[2]);
        break;
    case "organize":
        organiseFile.fn();
        break;
    case "help":
        helperFile.fn();
        break;
    default : 
        console.log("Wrong command");
        break;
}