// triangle.test.js

const Triangle = require('./triangle');

test('renders correct SVG for Triangle', () => {
  const triangle = new Triangle();
  triangle.setColor('green');
  triangle.setText('XYZ');
  triangle.setTextColor('purple');
  expect(triangle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">\n\n          <polygon points="150,0 300,200 0,200" fill="green" />\n\n          <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">XYZ</text>\n\n        </svg>');
});
