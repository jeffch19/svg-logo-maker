// User input section
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./generateSVG');

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
  // Process user input
  console.log(answers);

  // Generate SVG File
  const svgContent = generateSVG(answers);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});