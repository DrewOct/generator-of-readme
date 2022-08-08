// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  return `[![${license.name}](https://img.shields.io/apm/l/atomic-design-ui.svg?)]`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
  return `(${license.link})`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license)
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  # Description
  ${data.describeProject}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## License
  ${renderLicenseSection(data.licenseChoice)}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For answers to questions, contact me at ${data.emailAddress}
  Repository managed by ${data.gitHubUsername}
`;
}

module.exports = generateMarkdown;
