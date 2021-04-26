const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require ("./src/readme-template.js")

const projectName = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "title",
            message: "enter project name",
            validate: inputProjectName => {
                if (inputProjectName) {
                    return true
                } else {
                    console.log("project name required");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "enter project description",
            validate: inputDescrip => {
                if (inputDescrip) {
                    return true;
                } else {
                    console.log("project description required")
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "enter steps required to install and run your project",
            validate: inputInstall => {
                if (inputInstall) {
                    return true;
                } else {
                    console.log("installaton steps required")
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "explain how to use your project",
            validate: inputUsage => {
                if (inputUsage) {
                    return true;
                } else {
                    console.log("usage information required")
                }
            }
        },
        {
            type: "input",
            name: "contributors",
            message: "credit all contributors",
            validate: inputContributors => {
                if (inputContributors) {
                    return true;
                } else {
                    console.log("at least one contributor is required")
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "select project license",
            choices: ["MIT", "Academic", "GNU", "ISC", "Apache", "Mozilla", "Open"]
        },
        {
            type: "input",
            name: "tests",
            message: "if your project has tests explain how to run them"
        },
        {
            type: "input",
            name: "github",
            message: "enter github username to add a question contact",
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log("github username required")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "enter email to add second question contact",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log("email address required")
                }
            }
        },

    ])
};

projectName().then(projectData => {
    generateReadme = generatePage(projectData);

    fs.writeFile("./README.md", generateReadme, err => {
        if (err) throw new Error(err);
        console.log("README complete");
    });
});
