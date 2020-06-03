const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMembers = [];

function render1() {
    inquirer.prompt([
        {
            name: "employee",
            type: "list",
            message: "Employee Type:",
            choices: ["Engineer", "Manager", "Intern", "N/A"],
        },
    ])
        .then(function (data) {
            switch (data.employee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Manager":
                    addManager();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "N/A":
                    exitApplication();
                    break;
            }
        });
}
render1();


function addManager() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is your office number?",
        },
    ])
        .then(function (result) {
            console.log(result);
            const newmanager = new Manager(result.name, result.id, result.email, result.officeNumber);
            teamMembers.push(newmanager);
            render1();
        });
}


function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "github",
            type: "input",
            message: "What is your github?",
        },
    ])
        .then(function (result) {
            console.log(result);
            const newengineer = new Engineer(result.name, result.id, result.email, result.github);
            teamMembers.push(newengineer);
            render1();
        });
}



function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "school",
            type: "input",
            message: "What is your School?",
        },
    ])
        .then(function (result) {
            console.log(result);
            const newintern = new Intern(result.name, result.id, result.email, result.school);
            teamMembers.push(newintern);
            render1();
        });
}



function exitApplication() {
    fs.writeFile(outputPath, render(teamMembers), "utf8");
}

