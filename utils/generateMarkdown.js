// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === "GNU General Public License 2.0") {
    return`![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else if (license === "Apache License 2.0") {
    return `![License: AL v2](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license === "GNU General Public License 3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else{
  return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
  return "This application is covered by "+"["+license+"](https://opensource.org/licenses/MIT)"+" license."
  } else if (license === "GNU General Public License 2.0") {
    return "This application is covered by "+"["+license+"](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"+" license."
  }else if (license === "Apache License 2.0") {
    return "This application is covered by "+"["+license+"](https://www.apache.org/licenses/LICENSE-2.0)"+" license."
  }else if (license === "GNU General Public License 3.0") {
    return "This application is covered by "+"["+license+"](https://www.gnu.org/licenses/gpl-3.0.en.html)"+" license."
  } else {
    return " "; 
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return renderLicenseBadge(license)+"\n - "+renderLicenseLink(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license[0])}

  ## Table of Contents:
  - [Description](#description) 
  - [Installation](#installation)
  - [Usage](#usage)  
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [GitHub](#github)
  - [Questions](#questions)

## Description
- ${data.descriptionMotivation} 
- ${data.descriptionReason} 
- ${data.descriptionSolution} 
- ${data.descriptionLearning} 

## Installation
 ${data.installation}

## Usage
 ${data.usage}

## Credits
 ${data.credits}

## License
 ${renderLicenseSection(data.license[0])}

## How to Contribute
 ${data.contribution}

## Tests
 ${data.testingInstructions}

## GitHub
 Find me on GitHub ${data.githubUname}

## Questions
Please email me at ${data.email} for any questions.
`
}


module.exports = generateMarkdown;