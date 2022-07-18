const sumTwoNumber = require('./app');

test('1 + 2 = 3', () => {
  expect(sumTwoNumber(1, 2)).toBe(3);
});