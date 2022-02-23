// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
return "License";
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Credits](#Credits)
  5. [License](#License)
  6. [How to Contribute](#How to Contribute)
  7. [Tests](#Tests)
  8. [GitHub](#GitHub)
  9. [Questions](#Questions)
## Description
- ${data.description-motivation} 
- ${description-reason} 
- ${data.description-solution} 
- ${data.description-learning} 
## Installation
${data.installation}
## Usage
${data.usage}
md ![alt text](${data.screenshots})
## Credits
${data.credits}
## License
${renderLicenseLink(data.license)}
## How to Contribute
${data.contribution}
## Tests
${data.testing-instructions}
## GitHub
${data.github-uname}
## Questions
Please email me at ${data.email} for any questions.
`
}

module.exports = generateMarkdown;
