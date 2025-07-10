const verificaIntervalo = require('./exercicio04');

describe('Testes para a função verificaIntervalo', () => {

  test('Retorna false se a entrada não for número', () => {
    expect(verificaIntervalo("abc")).toBe(false);
    expect(verificaIntervalo(null)).toBe(false);
    expect(verificaIntervalo(undefined)).toBe(false);
  });

  test('Retorna false se o número estiver fora do intervalo [10, 20]', () => {
    expect(verificaIntervalo(5)).toBe(false);
    expect(verificaIntervalo(21)).toBe(false);
  });

  test('Retorna true se o número estiver entre 10 e 20 (inclusive)', () => {
    expect(verificaIntervalo(10)).toBe(true);
    expect(verificaIntervalo(15)).toBe(true);
    expect(verificaIntervalo(20)).toBe(true);
  });

});
