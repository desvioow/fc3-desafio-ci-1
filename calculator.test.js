const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
  expect(calculator.sub(2, 1)).toBe(1);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(calculator.mul(2, 2)).toBe(4);
});