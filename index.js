// Readme needs a TOC with links to the sections

// Need to get the badges from a github link

const fs = require('fs');
const inquirer = require('inquirer');
// const path = require('path');
const getData = require('./input.js')
const htmlMaker = require('./htmlReadme.js');
// const { clear } = require('console');

// function writeToFile(fileName, dataPoints) {
//   return   fs.writeFile(fileName, dataPoints);
// }

// const inputs = {
//   project_title: 'Fancy Thing',
//   description: 'It is a real fancy thing.',
//   installation: 'N/A',
//   usage: 'It is super easy to use.',
//   license: 'Boost Software License 1.0',
//   contributors: 'Poornima, Dom, Sam',
//   tests: 'No tests',
//   username: 'david-leverenz',
//   email: 'david.leverenz@gmail.com',
//   questions: 'For questions, please call Sam at home: 312-867-5309'
// }; 

function getIcon(inputs) {
const linkObject = [
{ licenseName: 'Apache license 2.0', licenseLink: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
{ licenseName: 'Boost Software License 1.0', licenseLink: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"},
{ licenseName: 'BSD 2-clause "Simplified" license', licenseLink: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"},
{ licenseName: 'BSD 3-clause "New" or "Revised" license', licenseLink: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"},
{ licenseName: 'Creative Commons Zero v1.0 Universal', licenseLink: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"},
{ licenseName: 'Eclipse Public License 2.0', licenseLink: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"},
{ licenseName: 'GNU Affero General Public License v3.0', licenseLink: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"},
{ licenseName: 'GNU General Public License v3.0', licenseLink: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"},
{ licenseName: 'GNU Lesser General Public License v2.1', licenseLink: "Could not find image"},
{ licenseName: 'MIT License', licenseLink: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
{ licenseName: 'Mozilla Public License 2.0', licenseLink: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https:/opensource.org/licenses/MPL-2.0)"},
{ licenseName: 'The Unlicense', licenseLink: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"}
]
// console.log(linkObject);
let licenseLink;
const matchLicenseLink = linkObject.filter(function(linkObject) {

  if (linkObject.licenseName === inputs.license) {
// console.log(linkObject);
// console.log(linkObject.licenseLink);
licenseLink=linkObject.licenseLink
}

});
return licenseLink
}

function init(){
  inquirer
  .prompt(getData)
  .then((data) => {
  // writeToFile('readme.md', htmlMaker({...data}));
  // getIcon(data);
  let pasteIcon = getIcon(data)
  // console.log(getIcon(data));
  fs.writeFile('readme.md', htmlMaker({...data,licenseLink:pasteIcon}), (err) => {
    err ? console.log(err) : console.log("success");

});
});
}

init()