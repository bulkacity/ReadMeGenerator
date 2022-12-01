// TODO: Include packages needed for this application
const inquirer = require('inquirer');
/* the following code will be replaced by await function */

//----------------------------------------------------------------
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     }
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
//----------------------------------------------------------------


// TODO: Create an array of questions for user input
const questions = [
  {
    //WHEN I enter my project title
    type:"input",
    message: "Enter your project title",
    name:"title",
  },
  {
    //WHEN I enter a description
    type:"input",
    message: "Enter a description of your project",
    name:"description",
  },
  {
    //WHEN I enter installation instructions
    type:"input",
    message: "Enter any installation instructions",
    name:"isntallInstructions",
  },
  {
    //WHEN I enter usage information
    type:"input",
    message: "Enter usage information",
    name:"usageInfo",
  },
  {
    //WHEN I enter contribution guidelines
    type:"input",
    message: "Enter contribution guidelines",
    name:"contribution",
  },
  {
    //WHEN I enter test instructions
    type:"input",
    message: "Enter your test instructions",
    name:"testInstr",
  },
  {
    //WHEN I choose a license for my application from a list of options
    type:"list",
    message: "Please SELECT the license you used for this project.",
    name:"license",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
      "INPUT LATER",
    ],
  },
  {
    //WHEN I enter my GitHub username
    type:"input",
    message: "Enter your GitHub username",
    name:"githubUser",
  },
  {
    // WHEN I enter my email address
    type:"input",
    message: "Enter your email address",
    name:"title",
  },
  {
    type:"input",
    message: "Enter youre project title",
    name:"title",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
