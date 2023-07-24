function renderLicenseBadge(license) {
  if(license === "") {
    return "";
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
}

function renderLicenseSection(license) {
  if(license === "") {
    return "";
  } else {
    return `## License

${renderLicenseBadge(license)}

This project is covered under the ${license} license.`
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  Hi! Im ${data.author}! Let me tell you a little about my project.

  ### What was my motivation for creating this project?
  
  ${data.motivation}

  ### What problem does this solve?

  ${data.solve}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ![Application in action](${data.screenshot})

  ## Contributing

  ${data.credits}

  ## Tests

  ## Questions

  For any questions or further inquiries feel free to contact me at either of the following:
  
  Github: [${data.github}](https://github.com/${data.github})

  Email: <${data.email}>

  `;
}

module.exports = generateMarkdown;
