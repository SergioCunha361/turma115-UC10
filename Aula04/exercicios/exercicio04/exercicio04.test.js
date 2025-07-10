const divideNumeros = require('./exercicio04');

describe('Testes para a função divideNumeros', () => {

  test('Lança erro se a entrada não for número', () => {
    expect(() => divideNumeros("10", 2)).toThrow('Entrada inválida');
    expect(() => divideNumeros(10, "2")).toThrow('Entrada inválida');
    expect(() => divideNumeros(null, 2)).toThrow('Entrada inválida');
  });

  test('Lança erro se o divisor for zero', () => {
    expect(() => divideNumeros(10, 0)).toThrow('Divisão por zero');
  });

  test('Retorna o resultado correto para divisão válida', () => {
    expect(divideNumeros(10, 2)).toBe(5);
    expect(divideNumeros(9, 3)).toBe(3);
    expect(divideNumeros(7.5, 2.5)).toBe(3);
  });

});


