const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "screenshotTitle",
    message: "Please insert the description for your screenshot",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please insert the path for your screenshot",
  },
  {
    type: "input",
    name: "installation",
    message: "How can your project/application can be installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "How can your project/application can be used for other users?",
  },
  {
    type: "input",
    name: "credits",
    message: "Are there any credits you need to mention in your read me file?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose from the following list a licence for your project",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License (GPL) v3",
      "GNU Lesser General Public License (LGPL) v3",
      "BSD 2-Clause License",
      "BSD 3-Clause License",
      "GNU Affero General Public License (AGPL) v3",
      "Mozilla Public License 2.0",
      "Unlicense",
    ],
  },
  {
    type: "input",
    name: "deployment",
    message:
      "Please describe how can your application be accessed and include link of your deployed application",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("sample.md", markdown);
  });
}

// function call to initialize program
init();
