
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

function renderer() {
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
            name: "role",
            type: "list",
            message: "Employee Type:",
            choices: ["Engineer", "Manager", "Intern"],
        },

    ])
        .then((answers) => {
            const { Engineer, Manager, Intern } = answers;
            if (answers === Engineer) {
                prompt([
                    {
                        name: "github",
                        type: "input",
                        message: "What is your github?",
                    },
                ]);
            };
            if (answers === Manager) {
                prompt([
                    {
                        name: "officenumber",
                        type: "input",
                        message: "What is your office number?",
                    },
                ]);
            };
            if (answers === Intern) {
                prompt([
                    {
                        name: "school",
                        type: "input",
                        message: "What is your School?",
                    },
                ]);
            };
        });

};

renderer();