// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// TODO: Create an array of questions for user input
const questions = [
  {
    type:"input"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();