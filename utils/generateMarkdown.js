// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'BSD') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'BSD') {
        return 'https://opensource.org/licenses/BSD-3-Clause';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'MIT License';
    } else if (license === 'Apache') {
        return 'Apache License 2.0';
    } else if (license === 'GPL') {
        return 'GNU General Public License v3.0';
    } else if (license === 'BSD') {
        return 'BSD 3-Clause License';
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
    ${data.installation}
  * [Usage](#usage)
    ${data.usage}
  * [License](#license)
    ${renderLicenseSection(data.license)}
  * [Contributing](#contributing)
    ${data.contribution}
  * [Tests](#tests)
    ${data.test}
  * [Questions](#questions)
    ${data.github}
  * [Credits](#credits)
    ${data.email}
  * [Badges](#badges)
    ${renderLicenseBadge(data.license)}
  * [Features](#features)
    ${data.features}
  * [How to Contribute](#how-to-contribute)
    ${data.contribution}
    ## License
    ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
