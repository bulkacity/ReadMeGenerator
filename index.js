// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const writeMDFile= util.promisify(fs.writeFile);
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
    name:"userEmail",
  },
  {
    type:"input",
    message: "Enter your deployed link",
    name:"liveLink",
  },
  {
    type:"input",
    message: "Paste Acceptance Criteria",
    name:"acceptanceCriteria",
  },
];
// TODO: Create a function to write README file
function generateMDfile(promptOutput){
  return `
  
# ${promptOutput.title}
  ${promptOutput.description}
  ${promptOutput.license}
  [A deployed version can be viewed here.](${promptOutput.liveLink})
  
---
## Contents
1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
---
## About
  ${promptOutput.usageInfo}
---
## User Story
  
---
## Acceptance Criteria
  Paste acceptance criteria :
  
  ${promptOutput.acceptanceCriteria}
---
## Visuals:
    
---
## Installation:
  ${promptOutput.isntallInstructions}

---
## License
  License used for this project - ${promptOutput.license}

---
## Contributing:
  
 Steps :
 ${promptOutput.contribution}

---
## Tests:
  ${promptOutput.testInstr}
---
## Contact Information:
* GitHub Username: ${promptOutput.githubUser}
* GitHub Email: ${promptOutput.userEmail}
  
`;
}



//////////////Using ASYNC///////////// function writeToFile(fileName, data) {}


//TODO: Create a function to initialize app
//function init() {}
async function init(){
  try{
      const answers=await inquirer.prompt(questions);
      await console.log("Complete");
      let readMefile=generateMDfile(answers);
      await writeMDFile("ReadMe.md",readMefile);
  }catch(err){
      throw err;
  }
}
// Function call to initialize app
init();
