// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const promptQuestions = (questionsData) => {
    return inquirer.prompt(questionsData);
};

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide installation instructions.');
                return false;
            }
        }
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide usage information.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide test instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please select a license.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your email address.');
                return false;
            }
        }
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile
        (fileName, generateMarkdown(data), (err) => {
            if (err) {
                console.log(err);
            }
            console.log('Success!');

        }
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        writeToFile('README.md', data);

    });
    if (err) {
        console.log(err);


    }
    console.log('Success!');

}

// Function call to initialize app
init(
    {
        title: 'ReadMe Generator',
        description: 'This is a command-line application that dynamically generates a professional README.md file from a user\'s input using the Inquirer package.',
        installation: 'To install necessary dependencies, run the following command: npm i',
        usage: 'To use this application, run the following command: node index.js',
        contribution: 'Please contact me via email for contribution guidelines.',
        test: 'To run tests, run the following command: npm test',
        license: 'MIT',
        github: 'giselamarque',
        email: 'marquezgisela5@gmail.com',
        
    }
);

