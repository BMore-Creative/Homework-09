//Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg) \n`;
  }
  return "";
}

// Returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  }
  return "";
}

// Returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project is licensed under the ${license} license`;
  }
  return "";
}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents

---

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## About the Project

---

>${data.description}

## Installation

---

Run the following command to install necessary dependencies:

\`\`\`javascript
${data.installation}
\`\`\`

## Usage

---

${data.usage}

## License

---

${renderLicenseSection(data.license)}

## Contributing

---

${data.contributing}

## Tests

---

Run the following command to init tests:
\`\`\`javascript
${data.test}
\`\`\`

## Questions

---

**Project Creator:** [${data.github}](https://github.com/${data.github})

*Feel free to contact me at ${
    data.email
  } for any questions, comments, or suggestions.*
`;
}

module.exports = generateMarkdown;
