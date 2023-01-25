const { info, printMessage } = require('./printMessage')

// Considerando a função printMessage, crie um teste em Jest para garantir que o objeto passado como parâmetro possui a propriedade personagem.



describe('Test the function printMessage', () => {
  it('que o objeto passado como parâmetro possui a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  })
  it('Test se a resposta contém a informação Boas vindas', () => {
    expect(printMessage(info)).toMatch('Boas vindas');
  })
  it('teste fluxo de exceção função printMessage', () => {
    expect(() => {printMessage('Margarida')}).toThrow('objeto inválido');
  });
})    