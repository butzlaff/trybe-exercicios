const {myRemove, myFizzBuzz, mapString, encode, decode} = require('./script')

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
describe('Testa a função myRemove', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2, 3,4]);
  });
});

describe('Testa a função myFizzBuzz', () => {
  // Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifica se o retorno é o esperado é fizzbuzz
  it('Verifique se a chamada myFizzBuzz sendo num um número divisível por 3 e 5 se retorno é o esperado é fizzbuzz', () => {
     expect(myFizzBuzz(15)).toMatch(/fizzbuzz/);
  });
  // Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
  it('Verifique se a chamada myFizzBuzz sendo num um número divisível por 3 se retorno é o esperado é fizz', () => {
    expect(myFizzBuzz(3)).toMatch(/fizz/);
  });
  // Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
  it('Verifique se a chamada myFizzBuzz sendo num um número divisível 5 se retorno é o esperado é buzz', () => {
    expect(myFizzBuzz(5)).toMatch(/buzz/);
  });
  // Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
  it('Verifique se a chamada myFizzBuzz sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o numero', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
  // Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.
  it('Verifique se a chamada myFizzBuzz sendo num um parâmetro que não é um número é false', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});

describe('Testa as funções Encode / Decode', () => {
  // Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifica se o retorno é o esperado é fizzbuzz
  it('Verifique se encode e decode são função', () => {
     expect(typeof encode && typeof decode).toBe('function');
  });
  it('Verifique se encode retorna números', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
 });
 it('Verifique se decode retorna vogais', () => {
  expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
});
it('Verifique se as demais letras não são convertidos para numero', () => {
  expect(encode('a,b,c,d,e,f,g,h,i,j,k')).not.toBe('1,2,3,4,5,6,7,8,9,0');
});
it('Verifique se as demais número não são convertidos para letra', () => {
  expect(decode('1,2,3,4,5,6,7,8,9,0')).not.toBe('a,b,c,d,e,f,g,h,i,j,k');
});
it('Verifique se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
  expect(encode('aeiou').length).toEqual(5);
});
  // // Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
  // it('Verifique se a chamada myFizzBuzz sendo num um número divisível por 3 se retorno é o esperado é fizz', () => {
  //   expect(myFizzBuzz(3)).toMatch(/fizz/);
  // });
  // // Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
  // it('Verifique se a chamada myFizzBuzz sendo num um número divisível 5 se retorno é o esperado é buzz', () => {
  //   expect(myFizzBuzz(5)).toMatch(/buzz/);
  // });
  // // Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
  // it('Verifique se a chamada myFizzBuzz sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o numero', () => {
  //   expect(myFizzBuzz(11)).toBe(11);
  // });
  // // Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.
  // it('Verifique se a chamada myFizzBuzz sendo num um parâmetro que não é um número é false', () => {
  //   expect(myFizzBuzz('a')).toBeFalsy();
  });








