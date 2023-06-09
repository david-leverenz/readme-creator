// This file holds all of the questions called by the .prompt section of my init function.
const askQuestions = [
    {
        type: 'input',
        message: 'Please enter your project title.',
        name: 'project_title',
    },
    {
        type: 'input',
        message: 'Please enter a description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter any installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter any usage instructions for your project.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select a license for your project.',
        name: 'license',
        choices: ['Apache license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License v2.1', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense']

    },
    {
        type: 'input',
        message: 'Please enter any contributors to your project (separate each with a comma).',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please enter any tests that users should run.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter how people should contact you with questions.',
        name: 'questions',
    }
]
module.exports = askQuestions;
