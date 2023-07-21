const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project\'s title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter a description for your project!',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project!',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Enter usage information for your project!',
        name: 'usage',
    },
    {
    type: 'input',
    message: 'Enter contribution guidelines for your project!',
    name: 'guidelines',
},
{
    type: 'input',
    message: 'Enter test instructions for your project!',
    name: 'test',
},
{
    type: 'list',
    message: 'What type of license do you prefer for your project?',
    name: 'license',
    choices: ['MIT', 'Apache', 'BSD','ISC', 'GNU GPLv3', "None"]
    
},
]).then((answers) => {
    // Use user feedback for... whatever you want!!
    let returnedData = generateMarkdown(answers);
    writeToFile('README.md', returnedData);
}).catch((error) => {
    console.log(error);
});

function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`README.md file created successfully`);
    }
  });
}
