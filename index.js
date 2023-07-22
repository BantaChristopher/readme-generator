
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function makeReadMe() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for creating the project?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What problem does it solve?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: "Can you provide instructions on how to use your application?"
        },
        {
            type: 'input',
            name: 'Screenshot',
            message: 'Can you provide the file location for a screenshot of your application? (Must be in your github repo)'
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'Did you collaborate or get help from an external source? If so list them here.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license are you using for the project?'
        },
        {
            type: 'input',
            name: 'github', 
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'author',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ]).then((response) => {
        markdown = generateMarkdown(response)
        fs.writeFile('README.md', markdown,
        (err) =>
        err ? console.log("Error trying to make README", err) : console.log('README created Successfully!'))
    })
}

makeReadMe()