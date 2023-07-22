// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "") {
    return "";
  } else {
    return `## License

    This project is covered under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.motivation}
  ${data.reason}
  ${data.solve}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [License](#license)
  - [Contact](#contact)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ![Application in action](https://i.imgur.com/Wsnw8S3.png)

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.credits}

  `;
}

module.exports = generateMarkdown;
