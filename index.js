// These enable fs and inquirer.  They also identify the other files needed and create constants for those files.
const fs = require('fs');
const inquirer = require('inquirer');
const getData = require('./input.js')
const htmlMaker = require('./htmlReadme.js');

// This function reads which license name was selected by the user and grabs the approrpriate link to it so that it can be displayed in the readme.  I couldn't find a link for the "GNU Lesser..." icon.
function getIcon(inputs) {
  const linkObject = [
    { licenseName: 'Apache license 2.0', licenseLink: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" },
    { licenseName: 'Boost Software License 1.0', licenseLink: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" },
    { licenseName: 'BSD 2-clause "Simplified" license', licenseLink: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)" },
    { licenseName: 'BSD 3-clause "New" or "Revised" license', licenseLink: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" },
    { licenseName: 'Creative Commons Zero v1.0 Universal', licenseLink: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)" },
    { licenseName: 'Eclipse Public License 2.0', licenseLink: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)" },
    { licenseName: 'GNU Affero General Public License v3.0', licenseLink: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)" },
    { licenseName: 'GNU General Public License v3.0', licenseLink: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" },
    { licenseName: 'GNU Lesser General Public License v2.1', licenseLink: "License image not available." },
    { licenseName: 'MIT License', licenseLink: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" },
    { licenseName: 'Mozilla Public License 2.0', licenseLink: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https:/opensource.org/licenses/MPL-2.0)" },
    { licenseName: 'The Unlicense', licenseLink: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)" }
  ]
  // This is the logic to match the input to my array of licenseName, licenseLink objects above.
  let licenseLink;
  const matchLicenseLink = linkObject.filter(function (linkObject) {

    if (linkObject.licenseName === inputs.license) {
      licenseLink = linkObject.licenseLink
    }

  });
  return licenseLink
}

// This is the function that starts the application.  It runs inquirer to collect data then it merges the data into my htmlReadme.js template and then writes it to a file.
function init() {
  inquirer
    .prompt(getData)
    .then((data) => {
      let pasteIcon = getIcon(data)
      fs.writeFile('readme.md', htmlMaker({ ...data, licenseLink: pasteIcon }), (err) => {
        err ? console.log(err) : console.log("success");

      });
    });
}

init()