
const Circle = require('./circle');

test('Circle should render SVG correctly with color', () => {
  const shape = new Circle();
  shape.setColor('red');
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});
