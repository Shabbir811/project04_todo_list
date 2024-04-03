#! /usr/bin/env node
import inquirer from "inquirer";
// first we need a array
let tasklist = [];
//add a condition for while loop
let repeate = true;
console.log(`-----------TO DO LIST-------\n\n`);
//now ask question from user through inquirer
// while loop
while (repeate) {
    let option = await inquirer.prompt({
        name: "list",
        type: "list",
        message: "select:",
        choices: ["addtask", "readtask", "deletetask", "updatetask", "deleteAll", "exit"]
    });
    if (option.list == "readtask") {
        console.log(`\n\t\t\tYOUR TODO TASKLIST\n\n`);
        tasklist.map(task => console.log(`\t\t\t\t${task}\n`));
        if (tasklist.length == 0) {
            console.log(`\n\t\t\tyou don't have any task in list\n`);
        }
    }
    else if (option.list == "addtask") {
        let answer = await inquirer.prompt({
            name: "add",
            type: "input",
            message: "what would you like to add in todo list "
        });
        tasklist.push(answer.add);
    }
    else if (option.list == "deletetask") {
        let ans = await inquirer.prompt({
            name: "confirm",
            type: "confirm",
            message: "do you really delete the task",
            default: false
        });
        if (ans.confirm === true && tasklist.length !== 0) {
            let delt = tasklist.pop();
            console.log(`\n${delt}       task has been deleted\n`);
        }
        else if (ans.confirm === true && tasklist.length == 0) {
            console.log(`\t\t\tyou don't have any task\n`);
        }
        else if (tasklist.length == 0) {
            console.log(`\n\t\t\tyou don't have any task in list\n`);
        }
    }
    else if (option.list === "updatetask") {
        if (tasklist.length == 0) {
            console.log(`\n\t\t\tyou don't have any task in list\n`);
        }
        else {
            let ask = await inquirer.prompt({
                name: "asks",
                type: "input",
                message: "write something for update last task",
            });
            let replace = tasklist.pop();
            tasklist.push(ask.asks);
            console.log(replace + `  this task has been updated into:
                      ` + ask.asks);
        }
    }
    else if (option.list === "deleteAll") {
        if (tasklist.length == 0) {
            console.log(`\n\t\t\tyou don't have any task in list\n`);
        }
        while (tasklist.length > 0) {
            let delall = tasklist.pop();
            console.log(delall + ` has been deleted`);
        }
    }
    else if (option.list === "exit") {
        repeate = false;
    }
}
