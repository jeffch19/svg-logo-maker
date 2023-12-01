
// square.test.js

const Square = require('./square');

test('renders correct SVG for Square', () => {
  const square = new Square();
  square.setColor('blue');
  square.setText('ABC');
  square.setTextColor('red');
  expect(square.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">\n\n          <rect width="200" height="200" fill="blue" />\n\n          <text x="100" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>\n\n        </svg>');
});
