// table of contents for readme with license

var tableOfContentsWLiscense = 
` ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Contact](#contact)`
// table of contents for readme without license
 var tableOfContentsWithoutLiscense = 
` ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Contact](#contact)`

 // function to decide which table of contents to render based on the presence of license
 function RenderTOC(license){
  if(license === 'None') {
    
   return tableOfContentsWithoutLiscense
   
 } else{
  
  return tableOfContentsWLiscense
 }
}

//function to render the license badge based on the chosen license
function renderLicenseBadge(license) {
  if(license === 'None') {
    // if no license is chosen return empty string ''
    return '';
  }
  return `![License Badge](https://img.shields.io/badge/License-${license}-green)`;
  
}



// function to render the license link based on the license chosen

function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "BSD"){
    return `[BSD License](https://academic-accelerator.com/encyclopedia/bsd-licenses)`;
  } else if (license === "Apache"){
    return `[Apache License](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === "ISC"){
    return `[ISC](https://choosealicense.com/licenses/isc/)`;
  } else if (license === "GNU GPLv3"){
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
    
}else if(license === 'None') {
  return ``;
}
}
 

// function to render the license section based on if license is chosen or not
function renderLicenseSection(license) {
  console.log("License is: ", license)

  if(license === 'None') {
    return '';
    
  }
 
  return `## License
  This project is licensed under the ${license} license`;
}

// TODO: Create a function to generate markdown for README using data provided by prompting the user through inquirer
function generateMarkdown(data) {
  const tableOfContents = RenderTOC(data.license);
  return `# ${data.title}   
   ${renderLicenseBadge(data.license)}
  ## Description  
  ${data.description}       
  ${tableOfContents}
  
  ## Installation
  ${data.instructions}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.guidelines}
  ## Test
  ${data.test}

  ${renderLicenseSection(data.license)}
  
  
  
  ## Contact
  For questions or feedback, please contact ${data.username} at ${data.email}.
`;
}
// export the generate markdown function to be used in other files
module.exports = generateMarkdown;
