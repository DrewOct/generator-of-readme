// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const gmd = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'describeProject',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your project.');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What are the steps for installation?',
        name: 'installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide a description of your project installation.');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'How is your application used?',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe how your application is used!');
                return false;
            }
        }

    },

    {
        type: 'input',
        message: 'What are your protocols for contributing?',
        name: 'contributing',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please describe your protocols for contribution!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What kinds of tests are you performing to check your application?',
        name: 'tests',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please describe the tests used for your application to work!');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Choose your license type.',
        name: 'licenseChoice',
        choices: [
            {
                name: 'Apache 2.0',
                value: {
                    name: 'Apache 2.0',
                    link: 'https://opensource.org/licenses/Apache-2.0'
                }
            },
            {
                name: 'MIT',
                value: {
                    name: 'MIT',
                    link: 'https://opensource.org/licenses/MIT'
                }
            },
            {
                name: 'GPL 3.0',
                value: {
                    name: 'GPL 3.0',
                    link: 'https://www.gnu.org/licenses/gpl-3.0'
                }
            },
            {
                name: "No License",
                value: null
            }
        ],
        validate: licenseChoice => {
            if (licenseChoice) {
                return true;
            } else {
                console.log('Please choose a license for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubUsername',
        validate: gitHubUsername => {
            if(gitHubUsername) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
        validate: emailAddress => {
            if(emailAddress) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // condition ? do A if true : do B if false
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log('File Written!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    console.log("Making ReadMe");
    console.log(data)
    writeToFile("ReadMe.md", gmd(data));
    }
    );
}

// Function call to initialize app
init();
