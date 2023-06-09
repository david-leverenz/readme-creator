// This function inserts the data collected from the user into a readme file template.
function genHTML(data) {
    return `${data.licenseLink} 

## Project Title: ${data.project_title}

## Description
${data.description}

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributors](#contributors)

[License](#license)

[Tests](#tests)

[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
My github profile is https://github.com/${data.username}.<br>
My email address is ${data.email}.<br>
If you have any questions: ${data.questions}<br>
`;
}

module.exports = genHTML;