// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//const StartMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
 const questions = inquirer.prompt
([
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
        choices: ['Eclipse', 'apache-2.0', 'GPLv3', 'wtfpl','N/A'],
        name: 'liscense',
    },
    {
        type: 'input',
        message: 'Test Cases?',
        name: 'Test',
    },
    {
        type: 'input',
        message: 'Add your Github name here',
        name: 'Questions',
    },
    {
        type: 'input',
        message: 'Add your Email address here',
        name: 'Email',
    },

]).then((answers) => {
    const CreateReadme = `# ${answers.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#Contributors)
* [Test](#Test)
* [Questions](#Questions)
    
            
## Description:
* ${answers.Description} <br/>
* ${answers.why} <br/>
* ${answers.problem} <br/>
## Installation
In order to install my project, you will need the following <br/>
* ${answers.Installation}  <br/>
## Usage
* ${answers.usage} <br/>
## License
* ${BadgeReturn(answers.liscense)}  <br/>
## Contributors
* ${answers.Contribute}  <br/>
## Test
* ${answers.Test}  <br/>
## Questions
* https://github.com/${answers.Questions}  <br/>
* Contact me at: ${answers.Email}  <br/>
    
    
    `
    fs.writeFile('Readme.md', CreateReadme, err => err ? console.log(err) : console.log("File Created"));
})


function BadgeReturn(Badge){
    
    if(Badge =='apache-2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if(Badge =='Eclipse'){
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }
    else if(Badge =='GPLv3'){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    else if (Badge=='wtfpl'){
        return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    } 
    else 
    return "N/A"
} 

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

//     fs.writeFile(fileName, data, err => err ? console.log(err) : console.log("File Created"));

// }

// const CreateMd = util.promisify(writeToFile);
// // TODO: Create a function to initialize app
// async function init() {
//     try {
//          const InputUser = await inquirer.prompt(questions);
//         console.log(InputUser);

       

//         await writeToFile('Readme.md', InputUser);

//     }
//     catch (error) {
//          console.log(error);
//     }
//  }

// // Function call to initialize app
// init();
