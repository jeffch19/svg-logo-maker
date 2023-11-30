// generateSVG.js

const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Function to generate SVG based on user input
function generateSVG(userInput) {
  // Destructure user input
  const { text, textColor, shape, shapeColor } = userInput;

  // Initialize shape instance based on user's choice
  let shapeInstance;
  switch (shape.toLowerCase()) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    default:
      throw new Error('Invalid shape choice.');
  }

  // Set properties for the shape instance
  shapeInstance.setText(text);
  shapeInstance.setTextColor(textColor);
  shapeInstance.setShapeColor(shapeColor);

  // Generate SVG string
  const svgContent = shapeInstance.render();

  // Save the SVG string to a file named 'logo.svg'
  fs.writeFileSync('logo.svg', svgContent);

  // Return the SVG string (optional, depends on your needs)
  return svgContent;
}

module.exports = generateSVG;

