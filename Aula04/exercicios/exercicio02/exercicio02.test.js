// exercicio02.test.js
const classificaTemperatura = require('./exercicio02');

describe('Testes para a função classificaTemperatura', () => {
  
  test('Retorna "Frio" para temperaturas abaixo de 15', () => {
    expect(classificaTemperatura(10)).toBe("Frio");
    expect(classificaTemperatura(-5)).toBe("Frio");
  });

  test('Retorna "Agradável" para temperaturas entre 15 e 25 (inclusive)', () => {
    expect(classificaTemperatura(15)).toBe("Agradável");
    expect(classificaTemperatura(20)).toBe("Agradável");
    expect(classificaTemperatura(25)).toBe("Agradável");
  });

  test('Retorna "Quente" para temperaturas acima de 25', () => {
    expect(classificaTemperatura(30)).toBe("Quente");
    expect(classificaTemperatura(100)).toBe("Quente");
  });

});
