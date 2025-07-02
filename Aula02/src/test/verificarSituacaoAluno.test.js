const verificarSituacaoAluno = require('../modules/verificarSituacaoAluno');

describe('Testes da função verificarSituacaoAluno', () => {

    test('Aluno aprovado com nota 8.5', () => {
        expect(verificarSituacaoAluno(8.5)).toBe("Aprovado");
        let resultado = verificarSituacaoAluno(8.5)
        console.log(resultado)
    });


    test('Aluno em recuperação com nota 5.5', () => {
        expect(verificarSituacaoAluno(5.5)).toBe("Recuperação");
    });

    test('Aluno reprovado com nota 3', () => {
        expect(verificarSituacaoAluno(3)).toBe("Reprovado");
    });

    test('Erro se nota for negativa', () => {
        expect(verificarSituacaoAluno(-2)).toBe("Erro: nota deve estar entre 0 e 10.");
    });

    test('Erro se nota for maior que 10', () => {
        expect(verificarSituacaoAluno(11)).toBe("Erro: nota deve estar entre 0 e 10.");
    });

    test('Erro se nota for string', () => {
        expect(verificarSituacaoAluno("7")).toBe("Erro: nota inválida. Deve ser um número.");
    });

    test('Erro se nota for null', () => {
        expect(verificarSituacaoAluno(null)).toBe("Erro: nota inválida. Deve ser um número.");
    });

    test('Erro se nota for undefined', () => {
        expect(verificarSituacaoAluno(undefined)).toBe("Erro: nota inválida. Deve ser um número.");
    });

});
