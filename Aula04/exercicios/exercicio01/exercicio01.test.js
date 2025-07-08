// exercicio01.test.js
const validaSenha = require('./exercicio01');

describe('Testes para a função validaSenha', () => {

  test('Retorna true para senha válida', () => {
    expect(validaSenha('Abcdef12')).toBeTruthy();
  });

  test('Retorna false para senha com menos de 8 caracteres', () => {
    expect(validaSenha('Abc12')).toBeFalsy();
  });

  test('Retorna false para senha sem letras', () => {
    expect(validaSenha('12345678')).toBeFalsy();
  });

  test('Retorna false para senha sem números', () => {
    expect(validaSenha('Abcdefgh')).toBeFalsy();
  });

  test('Retorna false para senha com espaço em branco', () => {
    expect(validaSenha('Abcd 123')).toBeFalsy();
  });

  test('Retorna false para entradas inválidas (não string ou string vazia)', () => {
    expect(validaSenha()).toBeFalsy();
    expect(validaSenha([])).toBeFalsy();
    expect(validaSenha(12345678)).toBeFalsy();
    expect(validaSenha('')).toBeFalsy();
  });

});
