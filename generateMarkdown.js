// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
${data.description}
## Screenshot
![${data.screenshotTitle}](${data.screenshot})
## Installation 
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License 
${data.license}
## Deployment
${data.deployment}
`;
}

module.exports = generateMarkdown;
