// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

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
 ${renderLicenseSection(data.license)}

## How to Contribute
 ${data.contribution}

## Tests
 ${data.testingInstructions}

## GitHub
 ${data.githubUname}

## Questions
Please email me at ${data.email} for any questions.
`
}


module.exports = generateMarkdown;