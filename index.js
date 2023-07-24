const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// prompting the user with questions using inquirer
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
    // generate markdown contemt based on user input using the generate markdown function
    let returnedData = generateMarkdown(answers);
    //write the generated markdown content to the readme.md file
    writeToFile('README.md', returnedData);
}).catch((error) => {
    //handle any errors that occor during the prompting process
    console.log(error);
});
// function to write content to file
function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, data, (err) => {
    if (err) {
        // if there is an error console log the error
      console.log(err);
    } else {
        // if the file is written successfullly the consolelog confirmation
      console.log(`README.md file created successfully`);
    }
  });
}
