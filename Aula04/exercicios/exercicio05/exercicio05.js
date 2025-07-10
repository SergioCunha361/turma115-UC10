function verificaIntervalo(n) {
 if (typeof n !== 'number') return false;
 return n >= 10 && n <= 20;
}

module.exports = verificaIntervalo

// 3 caminhos 

// Caminhos independentes: 

// Valor não numérico → retorna false

// Valor fora do intervalo → retorna false

// Valor dentro do intervalo [10, 20] → retorna true