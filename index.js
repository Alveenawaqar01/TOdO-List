#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let condition = true;
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([{
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Addtask", "Delete task", "update task", "view Todo-list", "exit"],
            }
        ]);
        if (option.choice === "Addtask") {
            await Addtask();
        }
        else if (option.choice === "Delete task") {
            await deletetask();
        }
        else if (option.choice === "view Todo-list") {
            await viewtask();
        }
        else if (option.choice === "exit") {
            condition = false;
        }
    }
};
// fuction to add new task to the list
let Addtask = async () => {
    let newtask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in todo-list.\n `);
};
//function to view all todo-list task
let viewtask = () => {
    console.log("\n your Todo-list:");
    todolist.forEach((task, index) => {
        console.log(`${index} ${task}`);
    });
};
// function to delete a teask from the list
let deletetask = async () => {
    await viewtask();
    let taskindex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }]);
    let deletetask = todolist.splice(taskindex.index, 1);
    console.log(`\n${deletetask} this task has been deleled successfully `);
};
main();
