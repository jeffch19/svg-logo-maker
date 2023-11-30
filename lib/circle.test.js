
const Circle = require('./circle');

test('Circle should render SVG correctly with color', () => {
  const shape = new Circle();
  shape.setColor('red');
  console.log(shape.render());
  expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <circle cx="150" cy="100" r="80" fill="red" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>

  </svg>`);
});
