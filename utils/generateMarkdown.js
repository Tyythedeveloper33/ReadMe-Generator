// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None') {
    return '';
  }
  return `![License Badge](https://img.shields.io/badge/License-${license}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[MIT License](https://opensource.org/license/MIT/)`;
  }
 
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("License is: ", license)

  if(license === 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${license} license`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [License](#license)
  - [Contact](#contact)
  
  ## Installation
  ${data.instructions}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.guidelines}
  ## Test
  ${data.test}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ## Contact
  For questions or feedback, please contact ${data.username} at ${data.email}.
`;
}

module.exports = generateMarkdown;
