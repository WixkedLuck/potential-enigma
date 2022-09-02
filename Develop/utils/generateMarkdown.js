// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#Contributors)
* [Test](#Test)
* [Questions](#Questions)

        
## Description:
* ${data.Description} <br/>
## Installation
In order to install my project, you will need the following <br/>
* ${data.Installation}  <br/>
## Usage
* ${data.usage} <br/>
## License
* ${data.liscense}  <br/>
## Contributors
* ${data.Contribute}  <br/>
## Test
* ${data.Test}  <br/>
## Questions
* ${data.Questions}  <br/>

`;
}

module.exports = generateMarkdown;
