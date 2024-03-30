#! /usr/bin/env node
import inquirer from "inquirer";
// first we need a array
let tasklist = [];
//add a condition for while loop
let repeate = true;
console.log(`-----------TO DO LIST-------`);
// while loop
while (repeate) {
    //now ask question from user through inquirer
    let answwer = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "you add task in todo list"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "add more task in list",
            default: false
        },
    ]);
    tasklist.push(answwer.add);
    repeate = answwer.addmore;
}
let option = await inquirer.prompt({
    name: "list",
    type: "list",
    message: "select:",
    choices: ["itemList"]
});
if (option.list == "itemList") {
    tasklist.map(task => console.log(task + "\n"));
}
