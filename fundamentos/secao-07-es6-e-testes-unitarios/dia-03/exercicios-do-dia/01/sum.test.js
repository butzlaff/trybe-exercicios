const {sum} = require('./sum');

describe('Test the function sum', () => {
  it('sum 4 and 5 need to be 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('sum 0 and 0 need to be 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('sum 4 and "5" need to be Throw Error', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  // este se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5');
  it('sum 4 and "5" need to be Throw Error', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  });
});