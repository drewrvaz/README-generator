// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Template structure to generate the README
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

// Using inquirer prompts to generate quesitons for the user to input the necessary info for their README
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for use of your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the guidelines for contributing to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests you would like to add? If so, please include instructions for how to run them.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to have attached to your project?",
    choices: ["The MIT License", "The GPL License", "Apache License", "GNU License", "N/A"]
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  }
])
.then((data) => { // Function to generate the ReadMe for the user
  const readMeContent = generateReadMe(data);

  fs.writeFile("newREADME.md", readMeContent, (err) =>
    err ? console.log(err) : console.log("Successfully generated ReadMe.md")
  ); 
});

