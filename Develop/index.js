// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
var generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "Please enter a title for your project",
    "Project description: What was your motivation?",
    "Project description: Why did you build this project?",
    "Project description: What problem does it solve?",
    "Project description: What did you learn?",
    "Please enter steps to install your application",
    "Please provide instructions and examples for use",
    "Please enter the path to screenshot(s) [You may enter multiple paths seperated by commas]",
    "Please enter Credits for your project",
    "What License did you use for this project?",
    "How can someone contribute to your project?",
    "Please enter test instructions",
    "Please enter your github username",
    "Please enter a good email to contact you"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
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
                name: "description-motivation",
            },
            {
                type: "input",
                message: questions[2],
                name: "description-reason",
            },
            {
                type: "input",
                message: questions[3],
                name: "description-solution",
            },
            {
                type: "input",
                message: questions[4],
                name: "description-learning",
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
                name: "screenshots",
            },
            {
                type: "input",
                message: questions[8],
                name: "credits",
            },
            {
                type: "checkbox",
                message: questions[9],
                choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
                name: "license",
            },
            {
                type: "input",
                message: questions[10],
                name: "contribution",
            },
            {
                type: "input",
                message: questions[11],
                name: "testing-instructions"
            },
            {
                type: "input",
                message: questions[12],
                name: "github-uname"
            },
            {
                type: "input",
                message: questions[13],
                name: "email"
            },
        ])
        .then((response) => {
            
        });
}

// Function call to initialize app
init();