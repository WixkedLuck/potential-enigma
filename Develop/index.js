// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const StartMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of your project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'why',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What is the usesage requirements?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How do I install your project',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Contributors?',
        name: 'Contribute',
    },
    {
        type: 'list',
        message: 'Do you have a liscense?',
        choices: ['afl-3.0', 'apache-2.0', 'bsl-1.0', 'wtfpl', 'lgpl-3.0'],
        name: 'liscense',
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log("File Created"));

}

const CreateMd = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
    try {
        const InputUser = await inquirer.prompt(questions);
        console.log(InputUser);

        const markdown = StartMarkdown(InputUser);
        console.log(markdown);

        await CreateMd('Readme.md', markdown);

    }
    catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
