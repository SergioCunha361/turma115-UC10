const calculaImposto = require('./exercicio03');

describe('Testes para a calcular imposto', () => {
  
  test('Retorna "null" para entrada não seja número ou renda < 0', () => {
    expect(calculaImposto("fff")).toBe(null);
    expect(calculaImposto(-50)).toBe(null);
  });

  test('Não desconta imposto para quem ganha <= 2000', () => {
    expect(calculaImposto(1000)).toBe(0);
    expect(calculaImposto(1500)).toBe(0);
    expect(calculaImposto(1900)).toBe(0);
  });

  test('Desconta 15% de imposto para quem ganha acima de 2000 até 5000', () => {
    expect(calculaImposto(3000)).toBe(3000*0.15);
    expect(calculaImposto(4500)).toBe(4500*0.15);
    expect(calculaImposto(4900)).toBe(4900*0.15);
  });

   test('Desconta 27,5% de imposto para quem ganha acima de 5000', () => {
    expect(calculaImposto(6000)).toBe(6000*0.275);
    expect(calculaImposto(7000)).toBe(7000*0.275);
    expect(calculaImposto(8000)).toBe(8000*0.275);
  });  

});



//chatGPT

// const calculaImposto = require('./exercicio03');

// describe('Testes para a função calculaImposto', () => {

//   test('Retorna null se a renda não for número ou for negativa', () => {
//     expect(calculaImposto("abc")).toBe(null);
//     expect(calculaImposto(-100)).toBe(null);
//     expect(calculaImposto([])).toBe(null);
//   });

//   test('Retorna 0 para rendas de até R$ 2000', () => {
//     expect(calculaImposto(0)).toBe(0);
//     expect(calculaImposto(1500)).toBe(0);
//     expect(calculaImposto(2000)).toBe(0);
//   });

//   test('Retorna 15% do valor para rendas entre R$ 2001 e R$ 5000', () => {
//     expect(calculaImposto(3000)).toBeCloseTo(450);   // 3000 * 0.15
//     expect(calculaImposto(5000)).toBeCloseTo(750);   // 5000 * 0.15
//   });

//   test('Retorna 27,5% do valor para rendas acima de R$ 5000', () => {
//     expect(calculaImposto(6000)).toBeCloseTo(1650);    // 6000 * 0.275
//     expect(calculaImposto(10000)).toBeCloseTo(2750);   // 10000 * 0.275
//   });

// });
