#! /usr/bin/env node
import inquirer from "inquirer";
// first we need a array
let tasklist = [];
//add a condition for while loop
let repeate = true;
console.log(`-----------TO DO LIST-------\n\n`);
//-------------------------------------------------------------------------------------------------------------
// while loop
while (repeate) {
    //now ask question from user through inquirer
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
        console.log(`\n\n${answer.add}        task has been added \n\n`);
        tasklist.push(answer.add);
    }
    else if (option.list == "deletetask") {
        if (tasklist.length === 0) {
            console.log(`\t\t\tyou don't have any task\n`);
        }
        else {
            let ans = await inquirer.prompt({
                name: "remove",
                type: "list",
                message: "select task to delete ",
                choices: tasklist
            });
            let removetask = tasklist.indexOf(ans.remove);
            if (removetask >= 0) {
                tasklist.splice(removetask, 1);
            }
            console.log(`\n\n${ans.remove}          task has been deleted \n\n`);
        }
    }
    else if (option.list === "updatetask") {
        if (tasklist.length == 0) {
            console.log(`\n\t\t\tyou don't have any task in list\n`);
        }
        else {
            let update = await inquirer.prompt([
                {
                    name: "upd",
                    type: "list",
                    message: "select task to update/rename",
                    choices: tasklist
                },
                {
                    name: "newtask",
                    type: "input",
                    message: "write what you update in selected task"
                }
            ]);
            let updated = tasklist.indexOf(update.upd);
            let newUpdate = update.newtask;
            if (updated >= 0) {
                tasklist.splice(updated, 1, newUpdate);
            }
            console.log(`\n\n${update.upd}   ( has been updated  into )     ${update.newtask} \n\n`);
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
