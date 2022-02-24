// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generate = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    "Please enter a title for your project",
    "Project description: What was your motivation?",
    "Project description: Why did you build this project?",
    "Project description: What problem does it solve?",
    "Project description: What did you learn?",
    "Please enter steps to install your application",
    "Please provide instructions and examples for use",
    "Please enter Credits for your project",
    "What License did you use for this project?",
    "How can someone contribute to your project?",
    "Please enter test instructions",
    "Please enter your github username",
    "Please enter a good email to contact you"
];

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.env.PWD, '/output/', fileName), generate(data));
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt([{
                type: "input",
                message: questions[0],
                name: "title",
            },
            {
                type: "input",
                message: questions[1],
                name: "descriptionMotivation",
            },
            {
                type: "input",
                message: questions[2],
                name: "descriptionReason",
            },
            {
                type: "input",
                message: questions[3],
                name: "descriptionSolution",
            },
            {
                type: "input",
                message: questions[4],
                name: "descriptionLearning",
            },
            {
                type: "input",
                message: questions[5],
                name: "installation",
            },
            {
                type: "input",
                message: questions[6],
                name: "usage",
            },
            {
                type: "input",
                message: questions[7],
                name: "credits",
            },
            {
                type: "checkbox",
                message: questions[8],
                choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0", "none"],
                name: "license",
            },
            {
                type: "input",
                message: questions[9],
                name: "contribution",
            },
            {
                type: "input",
                message: questions[10],
                name: "testingInstructions"
            },
            {
                type: "input",
                message: questions[11],
                name: "githubUname"
            },
            {
                type: "input",
                message: questions[12],
                name: "email"
            },
        ])
        .then((response) => {
            writeToFile("README.md", response);
        });
}

// Function call to initialize app
init();