
const { Circle, Square, Triangle } = require('./shapes');

test('Circle should be a class', () => {
  const shape = new Circle();
  expect(shape instanceof Circle).toBe(true);
});

test('Square should be a class', () => {
  const shape = new Square();
  expect(shape instanceof Square).toBe(true);
});

test('Triangle should be a class', () => {
  const shape = new Triangle();
  expect(shape instanceof Triangle).toBe(true);
});
