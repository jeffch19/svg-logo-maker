// User input section
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (3 Characters Max):'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):'
  }
]).then((answers) => {
  //process user input
  console.log(answers);
});