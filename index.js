// Readme needs a TOC with links to the sections

// Need to get the badges from a github link

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const getData = require('./input.js')
const htmlMaker = require('./htmlReadme.js');
// const { clear } = require('console');

// function writeToFile(fileName, dataPoints) {
//   return   fs.writeFile(fileName, dataPoints);
// }






function init(){
  inquirer
  .prompt(getData)
  .then((data) => {
  // writeToFile('readme.md', htmlMaker({...data}));
  // getIcon();
  fs.writeFile('readme.md', htmlMaker({...data}), (err) => {
    err ? console.log(err) : console.log("success");

});
});
}

init()

