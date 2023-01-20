const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 1)).toEqual({name:'banana',
    unit: 'kg',
    price: 1.99,
    quantity: 1
  })});
  it('utiliza zero como quantidade padrão', () => {
  expect(createItem('banana', 'kg', 1, undefined)).toEqual({name:'banana',
  unit: 'kg',
  quantity: 0,
  price: 1
})});
  it('Lança um erro quando não recebe parâmetros', () => {
  expect(() => {createItem()}).toThrow(Error)
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(1, 'kg', 1.99, 1)}).toThrow('O nome do item deve ser uma string')
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('banana', 'kg', -1.99, 1)}).toThrow('O preço do item deve ser maior que zero')
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('banana', 'kg', 0, 1)}).toThrow('O preço do item deve ser maior que zero')
  });
});