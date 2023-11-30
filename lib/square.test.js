
const Square = require('./square');

test('Square should render SVG correctly with color', () => {
  const shape = new Square();
  shape.setColor('green');
  expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
});
