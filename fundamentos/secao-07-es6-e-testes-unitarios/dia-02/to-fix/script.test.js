const [sum, mult, divide, checkValor] = require('./script');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('multiplique two values', () => {
  expect(mult(2, 3)).toEqual(6);
});

test('divide two values', () => {
  expect(divide(10, 5)).toEqual(2);
});

test('check if value is bigger then one', () => {
  expect(checkValor(1, 1)).toEqual(false);
});

test('check if value is bigger then one', () => {
  expect(checkValor(2, 1)).toEqual(true);
});
