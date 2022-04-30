/*
3 - Crie um objeto JSON que abriga todas as operações do exercício 2.
 */
let calculadora = {
    soma : (b, c) => b + c,
    subtracao : (b, c) => b - c,
    multiplicacao : (b, c) => b * c,
    divisao : (b, c) => b / c,
}
console.log(`${calculadora.soma(5, 5)}`);
console.log(`${calculadora.subtracao(10, 5)}`);
console.log(`${calculadora.multiplicacao(5, 3)}`);
console.log(`${calculadora.divisao(50, 2)}`);