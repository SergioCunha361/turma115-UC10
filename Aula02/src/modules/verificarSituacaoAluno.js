function verificarSituacaoAluno(nota) {
    if (typeof nota !== 'number' || isNaN(nota)) {
        return "Erro: nota inválida. Deve ser um número.";
    }

    if (nota < 0 || nota > 10) {
        return ("Erro: nota deve estar entre 0 e 10.");
    }

    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

module.exports = verificarSituacaoAluno;
