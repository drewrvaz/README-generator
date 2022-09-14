// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"   );

//Template structure to generate the README
const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, github, email }) => `# ${title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${tests}
## Questions
E-mail: ${email}
GitHub: ${github}`;

// TODO: Create an array of questions for user input
// const questions = [];
// Using inquirer prompts to generate quesitons for the user to input the necessary info for their README
inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the instructions for use of your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the guidelines for contributing to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Are there any tests you would like to add? If so, please include instructions for how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Which license would you like to have attached to your project?",
    name: "license",
    choices: ["The MIT License", "The GPL License", "Apache License", "GNU License", "N/A"]
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  }
]).then((answers) => {

})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
